/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1HTTPHeader } from './v1HTTPHeader';

/**
* HTTPGetAction describes an action based on HTTP Get requests.
*/
export class V1HTTPGetAction {
    /**
    * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
    */
    'host'?: string;
    /**
    * Custom headers to set in the request. HTTP allows repeated headers.
    */
    'httpHeaders'?: Array<V1HTTPHeader>;
    /**
    * Path to access on the HTTP server.
    */
    'path'?: string;
    /**
    * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
    */
    'port': object;
    /**
    * Scheme to use for connecting to the host. Defaults to HTTP.
    */
    'scheme'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "httpHeaders",
            "baseName": "httpHeaders",
            "type": "Array<V1HTTPHeader>"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "object"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1HTTPGetAction.attributeTypeMap;
    }
}

