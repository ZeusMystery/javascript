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
* The V1RollingUpdateDeployment model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1RollingUpdateDeployment
* @version 0.3-SNAPSHOT
*/
export default class V1RollingUpdateDeployment {
    /**
    * Constructs a new <code>V1RollingUpdateDeployment</code>.
    * Spec to control the desired behavior of rolling update.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1RollingUpdateDeployment
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1RollingUpdateDeployment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1RollingUpdateDeployment} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1RollingUpdateDeployment} The populated <code>V1RollingUpdateDeployment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RollingUpdateDeployment();

            
            
            

            if (data.hasOwnProperty('maxSurge')) {
                obj['maxSurge'] = ApiClient.convertToType(data['maxSurge'], Object);
            }
            if (data.hasOwnProperty('maxUnavailable')) {
                obj['maxUnavailable'] = ApiClient.convertToType(data['maxUnavailable'], Object);
            }
        }
        return obj;
    }

    /**
    * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
    * @member {Object} maxSurge
    */
    maxSurge = undefined;
    /**
    * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
    * @member {Object} maxUnavailable
    */
    maxUnavailable = undefined;








}


