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

import { HttpFile } from '../http/http';

/**
* Represents a Persistent Disk resource in Google Compute Engine.  A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
*/
export class V1GCEPersistentDiskVolumeSource {
    /**
    * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
    */
    'fsType'?: string;
    /**
    * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
    */
    'partition'?: number;
    /**
    * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
    */
    'pdName': string;
    /**
    * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
    */
    'readOnly'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "partition",
            "baseName": "partition",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pdName",
            "baseName": "pdName",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1GCEPersistentDiskVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

