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

import { V2MetricIdentifier } from '../models/V2MetricIdentifier';
import { V2MetricValueStatus } from '../models/V2MetricValueStatus';
import { HttpFile } from '../http/http';

/**
* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
*/
export class V2ExternalMetricStatus {
    'current': V2MetricValueStatus;
    'metric': V2MetricIdentifier;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "V2MetricValueStatus",
            "format": ""
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "V2MetricIdentifier",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2ExternalMetricStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

