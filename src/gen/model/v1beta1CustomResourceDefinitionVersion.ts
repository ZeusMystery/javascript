/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1beta1CustomResourceColumnDefinition } from './v1beta1CustomResourceColumnDefinition';
import { V1beta1CustomResourceSubresources } from './v1beta1CustomResourceSubresources';
import { V1beta1CustomResourceValidation } from './v1beta1CustomResourceValidation';

/**
* CustomResourceDefinitionVersion describes a version for CRD.
*/
export class V1beta1CustomResourceDefinitionVersion {
    /**
    * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead). If no top-level or per-version columns are specified, a single column displaying the age of the custom resource is used.
    */
    'additionalPrinterColumns'?: Array<V1beta1CustomResourceColumnDefinition>;
    /**
    * name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
    */
    'name': string;
    'schema'?: V1beta1CustomResourceValidation;
    /**
    * served is a flag enabling/disabling this version from being served via REST APIs
    */
    'served': boolean;
    /**
    * storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
    */
    'storage': boolean;
    'subresources'?: V1beta1CustomResourceSubresources;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalPrinterColumns",
            "baseName": "additionalPrinterColumns",
            "type": "Array<V1beta1CustomResourceColumnDefinition>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "V1beta1CustomResourceValidation"
        },
        {
            "name": "served",
            "baseName": "served",
            "type": "boolean"
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "boolean"
        },
        {
            "name": "subresources",
            "baseName": "subresources",
            "type": "V1beta1CustomResourceSubresources"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionVersion.attributeTypeMap;
    }
}

