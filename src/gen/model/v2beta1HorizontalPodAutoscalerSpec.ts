/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V2beta1CrossVersionObjectReference } from './v2beta1CrossVersionObjectReference';
import { V2beta1MetricSpec } from './v2beta1MetricSpec';

/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
*/
export class V2beta1HorizontalPodAutoscalerSpec {
    /**
    * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
    */
    'maxReplicas': number;
    /**
    * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond.
    */
    'metrics'?: Array<V2beta1MetricSpec>;
    /**
    * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
    */
    'minReplicas'?: number;
    'scaleTargetRef': V2beta1CrossVersionObjectReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxReplicas",
            "baseName": "maxReplicas",
            "type": "number"
        },
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "Array<V2beta1MetricSpec>"
        },
        {
            "name": "minReplicas",
            "baseName": "minReplicas",
            "type": "number"
        },
        {
            "name": "scaleTargetRef",
            "baseName": "scaleTargetRef",
            "type": "V2beta1CrossVersionObjectReference"
        }    ];

    static getAttributeTypeMap() {
        return V2beta1HorizontalPodAutoscalerSpec.attributeTypeMap;
    }
}

