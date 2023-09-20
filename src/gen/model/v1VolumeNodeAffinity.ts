/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1NodeSelector } from './v1NodeSelector';

/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
*/
export class V1VolumeNodeAffinity {
    'required'?: V1NodeSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "required",
            "baseName": "required",
            "type": "V1NodeSelector"
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeNodeAffinity.attributeTypeMap;
    }
}

