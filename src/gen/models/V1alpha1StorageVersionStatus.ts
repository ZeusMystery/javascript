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

import { V1alpha1ServerStorageVersion } from '../models/V1alpha1ServerStorageVersion';
import { V1alpha1StorageVersionCondition } from '../models/V1alpha1StorageVersionCondition';
import { HttpFile } from '../http/http';

/**
* API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend.
*/
export class V1alpha1StorageVersionStatus {
    /**
    * If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality.
    */
    'commonEncodingVersion'?: string;
    /**
    * The latest available observations of the storageVersion\'s state.
    */
    'conditions'?: Array<V1alpha1StorageVersionCondition>;
    /**
    * The reported versions per API server instance.
    */
    'storageVersions'?: Array<V1alpha1ServerStorageVersion>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "commonEncodingVersion",
            "baseName": "commonEncodingVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1StorageVersionCondition>",
            "format": ""
        },
        {
            "name": "storageVersions",
            "baseName": "storageVersions",
            "type": "Array<V1alpha1ServerStorageVersion>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1StorageVersionStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

