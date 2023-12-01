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
* PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
*/
export class V1PodFailurePolicyOnPodConditionsPattern {
    /**
    * Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
    */
    'status': string;
    /**
    * Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodFailurePolicyOnPodConditionsPattern.attributeTypeMap;
    }

    public constructor() {
    }
}

