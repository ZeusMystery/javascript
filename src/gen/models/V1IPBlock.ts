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

import { HttpFile } from '../http/http';

/**
* IPBlock describes a particular CIDR (Ex. \"192.168.1.1/24\",\"2001:db9::/64\") that is allowed to the pods matched by a NetworkPolicySpec\'s podSelector. The except entry describes CIDRs that should not be included within this rule.
*/
export class V1IPBlock {
    /**
    * CIDR is a string representing the IP Block Valid examples are \"192.168.1.1/24\" or \"2001:db9::/64\"
    */
    'cidr': string;
    /**
    * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are \"192.168.1.1/24\" or \"2001:db9::/64\" Except values will be rejected if they are outside the CIDR range
    */
    'except'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cidr",
            "baseName": "cidr",
            "type": "string",
            "format": ""
        },
        {
            "name": "except",
            "baseName": "except",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1IPBlock.attributeTypeMap;
    }

    public constructor() {
    }
}

