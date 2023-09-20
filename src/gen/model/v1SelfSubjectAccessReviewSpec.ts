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
import { V1NonResourceAttributes } from './v1NonResourceAttributes';
import { V1ResourceAttributes } from './v1ResourceAttributes';

/**
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export class V1SelfSubjectAccessReviewSpec {
    'nonResourceAttributes'?: V1NonResourceAttributes;
    'resourceAttributes'?: V1ResourceAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nonResourceAttributes",
            "baseName": "nonResourceAttributes",
            "type": "V1NonResourceAttributes"
        },
        {
            "name": "resourceAttributes",
            "baseName": "resourceAttributes",
            "type": "V1ResourceAttributes"
        }    ];

    static getAttributeTypeMap() {
        return V1SelfSubjectAccessReviewSpec.attributeTypeMap;
    }
}

