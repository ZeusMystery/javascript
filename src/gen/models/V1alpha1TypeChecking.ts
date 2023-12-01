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

import { V1alpha1ExpressionWarning } from '../models/V1alpha1ExpressionWarning';
import { HttpFile } from '../http/http';

/**
* TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
*/
export class V1alpha1TypeChecking {
    /**
    * The type checking warnings for each expression.
    */
    'expressionWarnings'?: Array<V1alpha1ExpressionWarning>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expressionWarnings",
            "baseName": "expressionWarnings",
            "type": "Array<V1alpha1ExpressionWarning>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1TypeChecking.attributeTypeMap;
    }

    public constructor() {
    }
}

