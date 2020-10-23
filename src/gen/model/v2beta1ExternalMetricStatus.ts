/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1LabelSelector } from './v1LabelSelector';

/**
* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
*/
export class V2beta1ExternalMetricStatus {
    /**
    * currentAverageValue is the current value of metric averaged over autoscaled pods.
    */
    'currentAverageValue'?: string;
    /**
    * currentValue is the current value of the metric (as a quantity)
    */
    'currentValue': string;
    /**
    * metricName is the name of a metric used for autoscaling in metric system.
    */
    'metricName': string;
    'metricSelector'?: V1LabelSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currentAverageValue",
            "baseName": "currentAverageValue",
            "type": "string"
        },
        {
            "name": "currentValue",
            "baseName": "currentValue",
            "type": "string"
        },
        {
            "name": "metricName",
            "baseName": "metricName",
            "type": "string"
        },
        {
            "name": "metricSelector",
            "baseName": "metricSelector",
            "type": "V1LabelSelector"
        }    ];

    static getAttributeTypeMap() {
        return V2beta1ExternalMetricStatus.attributeTypeMap;
    }
}

