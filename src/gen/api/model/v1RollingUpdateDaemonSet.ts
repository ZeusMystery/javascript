/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IntOrString } from '../../types';

/**
* Spec to control the desired behavior of daemon set rolling update.
*/
export class V1RollingUpdateDaemonSet {
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxSurge'?: IntOrString;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxUnavailable'?: IntOrString;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxSurge",
            "baseName": "maxSurge",
            "type": "IntOrString"
        },
        {
            "name": "maxUnavailable",
            "baseName": "maxUnavailable",
            "type": "IntOrString"
        }    ];

    static getAttributeTypeMap() {
        return V1RollingUpdateDaemonSet.attributeTypeMap;
    }
}

