/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* ResourcePolicyRule is a predicate that matches some resource requests, testing the request\'s verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) either (d1) the request does not specify a namespace (i.e., `Namespace==\"\"`) and clusterScope is true or (d2) the request specifies a namespace and least one member of namespaces matches the request\'s namespace.
*/
export class V1beta2ResourcePolicyRule {
    /**
    * `apiGroups` is a list of matching API groups and may not be empty. \"*\" matches all API groups and, if present, must be the only entry. Required.
    */
    'apiGroups': Array<string>;
    /**
    * `clusterScope` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list.
    */
    'clusterScope'?: boolean;
    /**
    * `namespaces` is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains \"*\".  Note that \"*\" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true.
    */
    'namespaces'?: Array<string>;
    /**
    * `resources` is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ \"services\", \"nodes/status\" ].  This list may not be empty. \"*\" matches all resources and, if present, must be the only entry. Required.
    */
    'resources': Array<string>;
    /**
    * `verbs` is a list of matching verbs and may not be empty. \"*\" matches all verbs and, if present, must be the only entry. Required.
    */
    'verbs': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiGroups",
            "baseName": "apiGroups",
            "type": "Array<string>"
        },
        {
            "name": "clusterScope",
            "baseName": "clusterScope",
            "type": "boolean"
        },
        {
            "name": "namespaces",
            "baseName": "namespaces",
            "type": "Array<string>"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<string>"
        },
        {
            "name": "verbs",
            "baseName": "verbs",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1beta2ResourcePolicyRule.attributeTypeMap;
    }
}

