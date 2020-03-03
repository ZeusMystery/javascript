/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1CrossVersionObjectReference } from './v1CrossVersionObjectReference';

/**
* specification of a horizontal pod autoscaler.
*/
export class V1HorizontalPodAutoscalerSpec {
    /**
    * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
    */
    'maxReplicas': number;
    /**
    * lower limit for the number of pods that can be set by the autoscaler, default 1.
    */
    'minReplicas'?: number;
    'scaleTargetRef': V1CrossVersionObjectReference;
    /**
    * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
    */
    'targetCPUUtilizationPercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxReplicas",
            "baseName": "maxReplicas",
            "type": "number"
        },
        {
            "name": "minReplicas",
            "baseName": "minReplicas",
            "type": "number"
        },
        {
            "name": "scaleTargetRef",
            "baseName": "scaleTargetRef",
            "type": "V1CrossVersionObjectReference"
        },
        {
            "name": "targetCPUUtilizationPercentage",
            "baseName": "targetCPUUtilizationPercentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1HorizontalPodAutoscalerSpec.attributeTypeMap;
    }
}

