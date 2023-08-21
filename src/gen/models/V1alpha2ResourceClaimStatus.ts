/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.27
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1alpha2AllocationResult } from './V1alpha2AllocationResult';
import { V1alpha2ResourceClaimConsumerReference } from './V1alpha2ResourceClaimConsumerReference';
import { HttpFile } from '../http/http';

/**
* ResourceClaimStatus tracks whether the resource has been allocated and what the resulting attributes are.
*/
export class V1alpha2ResourceClaimStatus {
    'allocation'?: V1alpha2AllocationResult;
    /**
    * DeallocationRequested indicates that a ResourceClaim is to be deallocated.  The driver then must deallocate this claim and reset the field together with clearing the Allocation field.  While DeallocationRequested is set, no new consumers may be added to ReservedFor.
    */
    'deallocationRequested'?: boolean;
    /**
    * DriverName is a copy of the driver name from the ResourceClass at the time when allocation started.
    */
    'driverName'?: string;
    /**
    * ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started.  There can be at most 32 such reservations. This may get increased in the future, but not reduced.
    */
    'reservedFor'?: Array<V1alpha2ResourceClaimConsumerReference>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allocation",
            "baseName": "allocation",
            "type": "V1alpha2AllocationResult",
            "format": ""
        },
        {
            "name": "deallocationRequested",
            "baseName": "deallocationRequested",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "driverName",
            "baseName": "driverName",
            "type": "string",
            "format": ""
        },
        {
            "name": "reservedFor",
            "baseName": "reservedFor",
            "type": "Array<V1alpha2ResourceClaimConsumerReference>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2ResourceClaimStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

