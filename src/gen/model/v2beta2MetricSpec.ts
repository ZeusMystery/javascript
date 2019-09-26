/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V2beta2ExternalMetricSource } from './v2beta2ExternalMetricSource';
import { V2beta2ObjectMetricSource } from './v2beta2ObjectMetricSource';
import { V2beta2PodsMetricSource } from './v2beta2PodsMetricSource';
import { V2beta2ResourceMetricSource } from './v2beta2ResourceMetricSource';

/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
export class V2beta2MetricSpec {
    'external'?: V2beta2ExternalMetricSource;
    'object'?: V2beta2ObjectMetricSource;
    'pods'?: V2beta2PodsMetricSource;
    'resource'?: V2beta2ResourceMetricSource;
    /**
    * type is the type of metric source.  It should be one of \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "external",
            "baseName": "external",
            "type": "V2beta2ExternalMetricSource"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "V2beta2ObjectMetricSource"
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "V2beta2PodsMetricSource"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V2beta2ResourceMetricSource"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2beta2MetricSpec.attributeTypeMap;
    }
}

