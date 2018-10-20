import stream = require('stream');
import WebSocket = require('ws');

import { V1Status } from './api';
import { KubeConfig } from './config';

const protocols = [
    'v4.channel.k8s.io',
    'v3.channel.k8s.io',
    'v2.channel.k8s.io',
    'channel.k8s.io',
];

export interface WebSocketInterface {
    connect(
        path: string,
        textHandler: ((text: string) => boolean) | null,
        binaryHandler: ((stream: number, buff: Buffer) => boolean) | null,
    ): Promise<WebSocket>;
}

export class WebSocketHandler implements WebSocketInterface {
    public static readonly StdinStream = 0;
    public static readonly StdoutStream = 1;
    public static readonly StderrStream = 2;
    public static readonly StatusStream = 3;

    public static handleStandardStreams(
        streamNum: number, buff: Buffer,
        stdout: stream.Writable, stderr: stream.Writable,
    ): V1Status | null {
        if (buff.length < 1) {
            return null;
        }
        if (streamNum === WebSocketHandler.StdoutStream) {
            stdout.write(buff);
        } else if (streamNum === WebSocketHandler.StderrStream) {
            stderr.write(buff);
        } else if (streamNum === WebSocketHandler.StatusStream) {
            // stream closing.
            if (stdout) {
                stdout.end();
            }
            if (stderr) {
                stderr.end();
            }
            return JSON.parse(buff.toString('utf8')) as V1Status;
        } else {
            throw new Error('Unknown stream: ' + streamNum);
        }
        return null;
    }

    public static handleStandardInput(
        ws: WebSocket,
        stdin: stream.Readable | any,
        streamNum: number = 0,
    ): boolean {
        stdin.on('data', (data) => {
            const buff = Buffer.alloc(data.length + 1);
            buff.writeInt8(streamNum, 0);
            if (data instanceof Buffer) {
                data.copy(buff, 1);
            } else {
                buff.write(data, 1);
            }
            ws.send(buff);
        });

        stdin.on('end', () => {
            ws.close();
        });
        // Keep the stream open
        return true;
    }

    public 'config': KubeConfig;

    public constructor(config: KubeConfig) {
        this.config = config;
    }

    /**
     * Connect to a web socket endpoint.
     * @param path The HTTP Path to connect to on the server.
     * @param textHandler Callback for text over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     * @param binaryHandler Callback for binary data over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     */
    public connect(
        path: string,
        textHandler: ((text: string) => boolean) | null,
        binaryHandler: ((stream: number, buff: Buffer) => boolean) | null,
    ): Promise<WebSocket> {

        const cluster = this.config.getCurrentCluster();
        if (!cluster) {
            throw new Error('No cluster is defined.');
        }
        const server = cluster.server;
        const ssl = server.startsWith('https://');
        const target = ssl ? server.substr(8) : server.substr(7);
        const proto = ssl ? 'wss' : 'ws';
        const uri = `${proto}://${target}${path}`;

        const opts: WebSocket.ClientOptions = {};
        // TODO: This doesn't set insecureSSL if skipTLSVerify is set...
        this.config.applytoHTTPSOptions(opts);

        return new Promise((resolve, reject) => {
            const client = new WebSocket(uri, opts);
            let resolved = false;

            client.onopen = () => {
                resolved = true;
                resolve(client);
            };

            client.onerror = (err) => {
                if (!resolved) {
                    reject(err);
                }
            };

            client.onmessage = ({ data }: { data: WebSocket.Data }) => {
                // TODO: support ArrayBuffer and Buffer[] data types?
                if (typeof data === 'string') {
                    if (textHandler && !textHandler(data)) {
                        client.close();
                    }
                } else if (data instanceof Buffer) {
                    const streamNum = data.readInt8(0);
                    if (binaryHandler && !binaryHandler(streamNum, data.slice(1))) {
                        client.close();
                    }
                }
            };
        });
    }
}
