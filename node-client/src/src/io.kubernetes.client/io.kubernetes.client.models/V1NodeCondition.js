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





/**
* The V1NodeCondition model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1NodeCondition
* @version 0.3-SNAPSHOT
*/
export default class V1NodeCondition {
    /**
    * Constructs a new <code>V1NodeCondition</code>.
    * NodeCondition contains condition information for a node.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1NodeCondition
    * @class
    * @param status {String} Status of the condition, one of True, False, Unknown.
    * @param type {String} Type of node condition.
    */

    constructor(status, type) {
        

        
        

        this['status'] = status;this['type'] = type;

        
    }

    /**
    * Constructs a <code>V1NodeCondition</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1NodeCondition} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1NodeCondition} The populated <code>V1NodeCondition</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1NodeCondition();

            
            
            

            if (data.hasOwnProperty('lastHeartbeatTime')) {
                obj['lastHeartbeatTime'] = ApiClient.convertToType(data['lastHeartbeatTime'], 'Date');
            }
            if (data.hasOwnProperty('lastTransitionTime')) {
                obj['lastTransitionTime'] = ApiClient.convertToType(data['lastTransitionTime'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Last time we got an update on a given condition.
    * @member {Date} lastHeartbeatTime
    */
    lastHeartbeatTime = undefined;
    /**
    * Last time the condition transit from one status to another.
    * @member {Date} lastTransitionTime
    */
    lastTransitionTime = undefined;
    /**
    * Human readable message indicating details about last transition.
    * @member {String} message
    */
    message = undefined;
    /**
    * (brief) reason for the condition's last transition.
    * @member {String} reason
    */
    reason = undefined;
    /**
    * Status of the condition, one of True, False, Unknown.
    * @member {String} status
    */
    status = undefined;
    /**
    * Type of node condition.
    * @member {String} type
    */
    type = undefined;








}


