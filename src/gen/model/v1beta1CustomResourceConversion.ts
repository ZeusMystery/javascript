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
import { ApiextensionsV1beta1WebhookClientConfig } from './apiextensionsV1beta1WebhookClientConfig';

/**
* CustomResourceConversion describes how to convert different versions of a CR.
*/
export class V1beta1CustomResourceConversion {
    /**
    * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Defaults to `[\"v1beta1\"]`.
    */
    'conversionReviewVersions'?: Array<string>;
    /**
    * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhookClientConfig to be set.
    */
    'strategy': string;
    'webhookClientConfig'?: ApiextensionsV1beta1WebhookClientConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conversionReviewVersions",
            "baseName": "conversionReviewVersions",
            "type": "Array<string>"
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "string"
        },
        {
            "name": "webhookClientConfig",
            "baseName": "webhookClientConfig",
            "type": "ApiextensionsV1beta1WebhookClientConfig"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CustomResourceConversion.attributeTypeMap;
    }
}

