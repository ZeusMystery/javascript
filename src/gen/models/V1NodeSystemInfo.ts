/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
*/
export class V1NodeSystemInfo {
    /**
    * The Architecture reported by the node
    */
    'architecture': string;
    /**
    * Boot ID reported by the node.
    */
    'bootID': string;
    /**
    * ContainerRuntime Version reported by the node through runtime remote API (e.g. docker://1.5.0).
    */
    'containerRuntimeVersion': string;
    /**
    * Kernel Version reported by the node from \'uname -r\' (e.g. 3.16.0-0.bpo.4-amd64).
    */
    'kernelVersion': string;
    /**
    * KubeProxy Version reported by the node.
    */
    'kubeProxyVersion': string;
    /**
    * Kubelet Version reported by the node.
    */
    'kubeletVersion': string;
    /**
    * MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
    */
    'machineID': string;
    /**
    * The Operating System reported by the node
    */
    'operatingSystem': string;
    /**
    * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
    */
    'osImage': string;
    /**
    * SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid
    */
    'systemUUID': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "architecture",
            "baseName": "architecture",
            "type": "string",
            "format": ""
        },
        {
            "name": "bootID",
            "baseName": "bootID",
            "type": "string",
            "format": ""
        },
        {
            "name": "containerRuntimeVersion",
            "baseName": "containerRuntimeVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kernelVersion",
            "baseName": "kernelVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kubeProxyVersion",
            "baseName": "kubeProxyVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kubeletVersion",
            "baseName": "kubeletVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "machineID",
            "baseName": "machineID",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatingSystem",
            "baseName": "operatingSystem",
            "type": "string",
            "format": ""
        },
        {
            "name": "osImage",
            "baseName": "osImage",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemUUID",
            "baseName": "systemUUID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSystemInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

