/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1DaemonSetCondition } from './v1DaemonSetCondition';

/**
* DaemonSetStatus represents the current status of a daemon set.
*/
export class V1DaemonSetStatus {
    /**
    * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
    */
    'collisionCount'?: number;
    /**
    * Represents the latest available observations of a DaemonSet\'s current state.
    */
    'conditions'?: Array<V1DaemonSetCondition>;
    /**
    * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
    */
    'currentNumberScheduled': number;
    /**
    * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
    */
    'desiredNumberScheduled': number;
    /**
    * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
    */
    'numberAvailable'?: number;
    /**
    * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
    */
    'numberMisscheduled': number;
    /**
    * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
    */
    'numberReady': number;
    /**
    * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
    */
    'numberUnavailable'?: number;
    /**
    * The most recent generation observed by the daemon set controller.
    */
    'observedGeneration'?: number;
    /**
    * The total number of nodes that are running updated daemon pod
    */
    'updatedNumberScheduled'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "collisionCount",
            "baseName": "collisionCount",
            "type": "number"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1DaemonSetCondition>"
        },
        {
            "name": "currentNumberScheduled",
            "baseName": "currentNumberScheduled",
            "type": "number"
        },
        {
            "name": "desiredNumberScheduled",
            "baseName": "desiredNumberScheduled",
            "type": "number"
        },
        {
            "name": "numberAvailable",
            "baseName": "numberAvailable",
            "type": "number"
        },
        {
            "name": "numberMisscheduled",
            "baseName": "numberMisscheduled",
            "type": "number"
        },
        {
            "name": "numberReady",
            "baseName": "numberReady",
            "type": "number"
        },
        {
            "name": "numberUnavailable",
            "baseName": "numberUnavailable",
            "type": "number"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "updatedNumberScheduled",
            "baseName": "updatedNumberScheduled",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1DaemonSetStatus.attributeTypeMap;
    }
}

