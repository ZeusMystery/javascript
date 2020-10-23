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
import { V2beta2MetricIdentifier } from './v2beta2MetricIdentifier';
import { V2beta2MetricTarget } from './v2beta2MetricTarget';

/**
* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
*/
export class V2beta2PodsMetricSource {
    'metric': V2beta2MetricIdentifier;
    'target': V2beta2MetricTarget;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metric",
            "baseName": "metric",
            "type": "V2beta2MetricIdentifier"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "V2beta2MetricTarget"
        }    ];

    static getAttributeTypeMap() {
        return V2beta2PodsMetricSource.attributeTypeMap;
    }
}

