/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from './v1LabelSelector';

/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
*/
export class V1beta1PodDisruptionBudgetSpec {
    /**
    * An eviction is allowed if at most \"maxUnavailable\" pods selected by \"selector\" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with \"minAvailable\".
    */
    'maxUnavailable'?: object;
    /**
    * An eviction is allowed if at least \"minAvailable\" pods selected by \"selector\" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying \"100%\".
    */
    'minAvailable'?: object;
    'selector'?: V1LabelSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxUnavailable",
            "baseName": "maxUnavailable",
            "type": "object"
        },
        {
            "name": "minAvailable",
            "baseName": "minAvailable",
            "type": "object"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1PodDisruptionBudgetSpec.attributeTypeMap;
    }
}

