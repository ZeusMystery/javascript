/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* MetricValueStatus holds the current value for a metric
*/
export class V2MetricValueStatus {
    /**
    * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
    */
    'averageUtilization'?: number;
    /**
    * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
    */
    'averageValue'?: string;
    /**
    * value is the current value of the metric (as a quantity).
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "averageUtilization",
            "baseName": "averageUtilization",
            "type": "number"
        },
        {
            "name": "averageValue",
            "baseName": "averageValue",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2MetricValueStatus.attributeTypeMap;
    }
}

