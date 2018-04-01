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
* The V1CinderVolumeSource model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1CinderVolumeSource
* @version 0.3-SNAPSHOT
*/
export default class V1CinderVolumeSource {
    /**
    * Constructs a new <code>V1CinderVolumeSource</code>.
    * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1CinderVolumeSource
    * @class
    * @param volumeID {String} volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
    */

    constructor(volumeID) {
        

        
        

        this['volumeID'] = volumeID;

        
    }

    /**
    * Constructs a <code>V1CinderVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1CinderVolumeSource} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1CinderVolumeSource} The populated <code>V1CinderVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1CinderVolumeSource();

            
            
            

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('volumeID')) {
                obj['volumeID'] = ApiClient.convertToType(data['volumeID'], 'String');
            }
        }
        return obj;
    }

    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
    * @member {String} fsType
    */
    fsType = undefined;
    /**
    * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
    * @member {Boolean} readOnly
    */
    readOnly = undefined;
    /**
    * volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
    * @member {String} volumeID
    */
    volumeID = undefined;








}


