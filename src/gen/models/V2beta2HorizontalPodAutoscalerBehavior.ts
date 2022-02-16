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

import { V2beta2HPAScalingRules } from './V2beta2HPAScalingRules';
import { HttpFile } from '../http/http';

/**
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
*/
export class V2beta2HorizontalPodAutoscalerBehavior {
    'scaleDown'?: V2beta2HPAScalingRules;
    'scaleUp'?: V2beta2HPAScalingRules;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "scaleDown",
            "baseName": "scaleDown",
            "type": "V2beta2HPAScalingRules",
            "format": ""
        },
        {
            "name": "scaleUp",
            "baseName": "scaleUp",
            "type": "V2beta2HPAScalingRules",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2beta2HorizontalPodAutoscalerBehavior.attributeTypeMap;
    }

    public constructor() {
    }
}

