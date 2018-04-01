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
* The V1alpha1VolumeAttachmentSource model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1alpha1VolumeAttachmentSource
* @version 0.3-SNAPSHOT
*/
export default class V1alpha1VolumeAttachmentSource {
    /**
    * Constructs a new <code>V1alpha1VolumeAttachmentSource</code>.
    * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1VolumeAttachmentSource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1alpha1VolumeAttachmentSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1VolumeAttachmentSource} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1alpha1VolumeAttachmentSource} The populated <code>V1alpha1VolumeAttachmentSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1alpha1VolumeAttachmentSource();

            
            
            

            if (data.hasOwnProperty('persistentVolumeName')) {
                obj['persistentVolumeName'] = ApiClient.convertToType(data['persistentVolumeName'], 'String');
            }
        }
        return obj;
    }

    /**
    * Name of the persistent volume to attach.
    * @member {String} persistentVolumeName
    */
    persistentVolumeName = undefined;








}


