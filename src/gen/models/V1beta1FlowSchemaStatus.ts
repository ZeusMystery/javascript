/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1beta1FlowSchemaCondition } from '../models/V1beta1FlowSchemaCondition';
import { HttpFile } from '../http/http';

/**
* FlowSchemaStatus represents the current state of a FlowSchema.
*/
export class V1beta1FlowSchemaStatus {
    /**
    * `conditions` is a list of the current states of FlowSchema.
    */
    'conditions'?: Array<V1beta1FlowSchemaCondition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1beta1FlowSchemaCondition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1FlowSchemaStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

