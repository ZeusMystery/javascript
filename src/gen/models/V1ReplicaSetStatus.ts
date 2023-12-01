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

import { V1ReplicaSetCondition } from '../models/V1ReplicaSetCondition';
import { HttpFile } from '../http/http';

/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
*/
export class V1ReplicaSetStatus {
    /**
    * The number of available replicas (ready for at least minReadySeconds) for this replica set.
    */
    'availableReplicas'?: number;
    /**
    * Represents the latest available observations of a replica set\'s current state.
    */
    'conditions'?: Array<V1ReplicaSetCondition>;
    /**
    * The number of pods that have labels matching the labels of the pod template of the replicaset.
    */
    'fullyLabeledReplicas'?: number;
    /**
    * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
    */
    'observedGeneration'?: number;
    /**
    * readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition.
    */
    'readyReplicas'?: number;
    /**
    * Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
    */
    'replicas': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "availableReplicas",
            "baseName": "availableReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1ReplicaSetCondition>",
            "format": ""
        },
        {
            "name": "fullyLabeledReplicas",
            "baseName": "fullyLabeledReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "readyReplicas",
            "baseName": "readyReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1ReplicaSetStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

