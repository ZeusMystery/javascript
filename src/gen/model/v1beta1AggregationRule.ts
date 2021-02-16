/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1LabelSelector } from './v1LabelSelector';

/**
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
*/
export class V1beta1AggregationRule {
    /**
    * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole\'s permissions will be added
    */
    'clusterRoleSelectors'?: Array<V1LabelSelector>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clusterRoleSelectors",
            "baseName": "clusterRoleSelectors",
            "type": "Array<V1LabelSelector>"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1AggregationRule.attributeTypeMap;
    }
}

