/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
*/
export class V1Preconditions {
    /**
    * Specifies the target ResourceVersion
    */
    'resourceVersion'?: string;
    /**
    * Specifies the target UID.
    */
    'uid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceVersion",
            "baseName": "resourceVersion",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1Preconditions.attributeTypeMap;
    }
}

