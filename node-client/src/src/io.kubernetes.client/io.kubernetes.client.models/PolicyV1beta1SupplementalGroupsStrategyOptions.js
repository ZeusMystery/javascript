/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.10.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import PolicyV1beta1IDRange from './PolicyV1beta1IDRange';





/**
* The PolicyV1beta1SupplementalGroupsStrategyOptions model module.
* @module io.kubernetes.client/io.kubernetes.client.models/PolicyV1beta1SupplementalGroupsStrategyOptions
* @version 0.3-SNAPSHOT
*/
export default class PolicyV1beta1SupplementalGroupsStrategyOptions {
    /**
    * Constructs a new <code>PolicyV1beta1SupplementalGroupsStrategyOptions</code>.
    * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/PolicyV1beta1SupplementalGroupsStrategyOptions
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PolicyV1beta1SupplementalGroupsStrategyOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/PolicyV1beta1SupplementalGroupsStrategyOptions} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/PolicyV1beta1SupplementalGroupsStrategyOptions} The populated <code>PolicyV1beta1SupplementalGroupsStrategyOptions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyV1beta1SupplementalGroupsStrategyOptions();

            
            
            

            if (data.hasOwnProperty('ranges')) {
                obj['ranges'] = ApiClient.convertToType(data['ranges'], [PolicyV1beta1IDRange]);
            }
            if (data.hasOwnProperty('rule')) {
                obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
            }
        }
        return obj;
    }

    /**
    * Ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end.
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/PolicyV1beta1IDRange>} ranges
    */
    ranges = undefined;
    /**
    * Rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
    * @member {String} rule
    */
    rule = undefined;








}


