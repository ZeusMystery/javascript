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
* The V1beta1Subject model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1beta1Subject
* @version 0.3-SNAPSHOT
*/
export default class V1beta1Subject {
    /**
    * Constructs a new <code>V1beta1Subject</code>.
    * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1beta1Subject
    * @class
    * @param kind {String} Kind of object being referenced. Values defined by this API group are \"User\", \"Group\", and \"ServiceAccount\". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
    * @param name {String} Name of the object being referenced.
    */

    constructor(kind, name) {
        

        
        

        this['kind'] = kind;this['name'] = name;

        
    }

    /**
    * Constructs a <code>V1beta1Subject</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1Subject} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1beta1Subject} The populated <code>V1beta1Subject</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1Subject();

            
            
            

            if (data.hasOwnProperty('apiGroup')) {
                obj['apiGroup'] = ApiClient.convertToType(data['apiGroup'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
        }
        return obj;
    }

    /**
    * APIGroup holds the API group of the referenced subject. Defaults to \"\" for ServiceAccount subjects. Defaults to \"rbac.authorization.k8s.io\" for User and Group subjects.
    * @member {String} apiGroup
    */
    apiGroup = undefined;
    /**
    * Kind of object being referenced. Values defined by this API group are \"User\", \"Group\", and \"ServiceAccount\". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Name of the object being referenced.
    * @member {String} name
    */
    name = undefined;
    /**
    * Namespace of the referenced object.  If the object kind is non-namespace, such as \"User\" or \"Group\", and this value is not empty the Authorizer should report an error.
    * @member {String} namespace
    */
    namespace = undefined;








}


