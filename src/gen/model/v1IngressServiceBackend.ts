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
import { V1ServiceBackendPort } from './v1ServiceBackendPort';

/**
* IngressServiceBackend references a Kubernetes Service as a Backend.
*/
export class V1IngressServiceBackend {
    /**
    * Name is the referenced service. The service must exist in the same namespace as the Ingress object.
    */
    'name': string;
    'port'?: V1ServiceBackendPort;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "V1ServiceBackendPort"
        }    ];

    static getAttributeTypeMap() {
        return V1IngressServiceBackend.attributeTypeMap;
    }
}

