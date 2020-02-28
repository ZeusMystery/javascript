/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1TopologySelectorLabelRequirement } from './v1TopologySelectorLabelRequirement';

/**
* A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
*/
export class V1TopologySelectorTerm {
    /**
    * A list of topology selector requirements by labels.
    */
    'matchLabelExpressions'?: Array<V1TopologySelectorLabelRequirement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchLabelExpressions",
            "baseName": "matchLabelExpressions",
            "type": "Array<V1TopologySelectorLabelRequirement>"
        }    ];

    static getAttributeTypeMap() {
        return V1TopologySelectorTerm.attributeTypeMap;
    }
}

