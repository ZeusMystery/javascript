/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1ContainerState } from './v1ContainerState';
import { V1ResourceRequirements } from './v1ResourceRequirements';

/**
* ContainerStatus contains details for the current status of this container.
*/
export class V1ContainerStatus {
    /**
    * AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
    */
    'allocatedResources'?: { [key: string]: string; };
    /**
    * ContainerID is the ID of the container in the format \'<type>://<container_id>\'. Where type is a container runtime identifier, returned from Version call of CRI API (for example \"containerd\").
    */
    'containerID'?: string;
    /**
    * Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
    */
    'image': string;
    /**
    * ImageID is the image ID of the container\'s image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
    */
    'imageID': string;
    'lastState'?: V1ContainerState;
    /**
    * Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
    */
    'name': string;
    /**
    * Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).  The value is typically used to determine whether a container is ready to accept traffic.
    */
    'ready': boolean;
    'resources'?: V1ResourceRequirements;
    /**
    * RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
    */
    'restartCount': number;
    /**
    * Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
    */
    'started'?: boolean;
    'state'?: V1ContainerState;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allocatedResources",
            "baseName": "allocatedResources",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "containerID",
            "baseName": "containerID",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "imageID",
            "baseName": "imageID",
            "type": "string"
        },
        {
            "name": "lastState",
            "baseName": "lastState",
            "type": "V1ContainerState"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ready",
            "baseName": "ready",
            "type": "boolean"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1ResourceRequirements"
        },
        {
            "name": "restartCount",
            "baseName": "restartCount",
            "type": "number"
        },
        {
            "name": "started",
            "baseName": "started",
            "type": "boolean"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "V1ContainerState"
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerStatus.attributeTypeMap;
    }
}

