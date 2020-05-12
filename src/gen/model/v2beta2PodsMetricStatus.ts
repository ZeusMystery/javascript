/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V2beta2MetricIdentifier } from './v2beta2MetricIdentifier';
import { V2beta2MetricValueStatus } from './v2beta2MetricValueStatus';

/**
* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
*/
export class V2beta2PodsMetricStatus {
    'current': V2beta2MetricValueStatus;
    'metric': V2beta2MetricIdentifier;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "V2beta2MetricValueStatus"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "V2beta2MetricIdentifier"
        }    ];

    static getAttributeTypeMap() {
        return V2beta2PodsMetricStatus.attributeTypeMap;
    }
}

