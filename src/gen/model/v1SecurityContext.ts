/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1Capabilities } from './v1Capabilities';
import { V1SELinuxOptions } from './v1SELinuxOptions';
import { V1WindowsSecurityContextOptions } from './v1WindowsSecurityContextOptions';

/**
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
*/
export class V1SecurityContext {
    /**
    * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
    */
    'allowPrivilegeEscalation'?: boolean;
    'capabilities'?: V1Capabilities;
    /**
    * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
    */
    'privileged'?: boolean;
    /**
    * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled.
    */
    'procMount'?: string;
    /**
    * Whether this container has a read-only root filesystem. Default is false.
    */
    'readOnlyRootFilesystem'?: boolean;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsUser'?: number;
    'seLinuxOptions'?: V1SELinuxOptions;
    'windowsOptions'?: V1WindowsSecurityContextOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPrivilegeEscalation",
            "baseName": "allowPrivilegeEscalation",
            "type": "boolean"
        },
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "V1Capabilities"
        },
        {
            "name": "privileged",
            "baseName": "privileged",
            "type": "boolean"
        },
        {
            "name": "procMount",
            "baseName": "procMount",
            "type": "string"
        },
        {
            "name": "readOnlyRootFilesystem",
            "baseName": "readOnlyRootFilesystem",
            "type": "boolean"
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number"
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean"
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number"
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "V1SELinuxOptions"
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "V1WindowsSecurityContextOptions"
        }    ];

    static getAttributeTypeMap() {
        return V1SecurityContext.attributeTypeMap;
    }
}

