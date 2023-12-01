/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.28.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* DaemonEndpoint contains information about a single Daemon endpoint.
*/
export class V1DaemonEndpoint {
    /**
    * Port number of the given endpoint.
    */
    'Port': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "Port",
            "baseName": "Port",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1DaemonEndpoint.attributeTypeMap;
    }

    public constructor() {
    }
}

