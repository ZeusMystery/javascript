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

import { V1VolumeAttachmentSource } from '../models/V1VolumeAttachmentSource';
import { HttpFile } from '../http/http';

/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
*/
export class V1VolumeAttachmentSpec {
    /**
    * attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
    */
    'attacher': string;
    /**
    * nodeName represents the node that the volume should be attached to.
    */
    'nodeName': string;
    'source': V1VolumeAttachmentSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attacher",
            "baseName": "attacher",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1VolumeAttachmentSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeAttachmentSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

