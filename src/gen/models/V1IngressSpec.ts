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

import { V1IngressBackend } from '../models/V1IngressBackend';
import { V1IngressRule } from '../models/V1IngressRule';
import { V1IngressTLS } from '../models/V1IngressTLS';
import { HttpFile } from '../http/http';

/**
* IngressSpec describes the Ingress the user wishes to exist.
*/
export class V1IngressSpec {
    'defaultBackend'?: V1IngressBackend;
    /**
    * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
    */
    'ingressClassName'?: string;
    /**
    * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
    */
    'rules'?: Array<V1IngressRule>;
    /**
    * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
    */
    'tls'?: Array<V1IngressTLS>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultBackend",
            "baseName": "defaultBackend",
            "type": "V1IngressBackend",
            "format": ""
        },
        {
            "name": "ingressClassName",
            "baseName": "ingressClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1IngressRule>",
            "format": ""
        },
        {
            "name": "tls",
            "baseName": "tls",
            "type": "Array<V1IngressTLS>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1IngressSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

