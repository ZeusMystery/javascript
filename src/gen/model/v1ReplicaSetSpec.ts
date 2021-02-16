/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1LabelSelector } from './v1LabelSelector';
import { V1PodTemplateSpec } from './v1PodTemplateSpec';

/**
* ReplicaSetSpec is the specification of a ReplicaSet.
*/
export class V1ReplicaSetSpec {
    /**
    * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
    */
    'minReadySeconds'?: number;
    /**
    * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
    */
    'replicas'?: number;
    'selector': V1LabelSelector;
    'template'?: V1PodTemplateSpec;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "minReadySeconds",
            "baseName": "minReadySeconds",
            "type": "number"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1PodTemplateSpec"
        }    ];

    static getAttributeTypeMap() {
        return V1ReplicaSetSpec.attributeTypeMap;
    }
}

