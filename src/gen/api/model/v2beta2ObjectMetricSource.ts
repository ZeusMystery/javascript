/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V2beta2CrossVersionObjectReference } from './v2beta2CrossVersionObjectReference';
import { V2beta2MetricIdentifier } from './v2beta2MetricIdentifier';
import { V2beta2MetricTarget } from './v2beta2MetricTarget';

/**
* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export class V2beta2ObjectMetricSource {
    'describedObject': V2beta2CrossVersionObjectReference;
    'metric': V2beta2MetricIdentifier;
    'target': V2beta2MetricTarget;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "describedObject",
            "baseName": "describedObject",
            "type": "V2beta2CrossVersionObjectReference"
        },
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
        return V2beta2ObjectMetricSource.attributeTypeMap;
    }
}

