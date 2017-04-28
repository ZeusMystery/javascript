/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1ISCSIVolumeSource = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1ISCSIVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ISCSIVolumeSource
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1ISCSIVolumeSource</code>.
   * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ISCSIVolumeSource
   * @class
   * @param iqn {String} Target iSCSI Qualified Name.
   * @param lun {Number} iSCSI target lun number.
   * @param targetPortal {String} iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   */
  var exports = function(iqn, lun, targetPortal) {
    var _this = this;


    _this['iqn'] = iqn;

    _this['lun'] = lun;


    _this['targetPortal'] = targetPortal;
  };

  /**
   * Constructs a <code>V1ISCSIVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ISCSIVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ISCSIVolumeSource} The populated <code>V1ISCSIVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fsType')) {
        obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
      }
      if (data.hasOwnProperty('iqn')) {
        obj['iqn'] = ApiClient.convertToType(data['iqn'], 'String');
      }
      if (data.hasOwnProperty('iscsiInterface')) {
        obj['iscsiInterface'] = ApiClient.convertToType(data['iscsiInterface'], 'String');
      }
      if (data.hasOwnProperty('lun')) {
        obj['lun'] = ApiClient.convertToType(data['lun'], 'Number');
      }
      if (data.hasOwnProperty('portals')) {
        obj['portals'] = ApiClient.convertToType(data['portals'], ['String']);
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('targetPortal')) {
        obj['targetPortal'] = ApiClient.convertToType(data['targetPortal'], 'String');
      }
    }
    return obj;
  }

  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi
   * @member {String} fsType
   */
  exports.prototype['fsType'] = undefined;
  /**
   * Target iSCSI Qualified Name.
   * @member {String} iqn
   */
  exports.prototype['iqn'] = undefined;
  /**
   * Optional: Defaults to 'default' (tcp). iSCSI interface name that uses an iSCSI transport.
   * @member {String} iscsiInterface
   */
  exports.prototype['iscsiInterface'] = undefined;
  /**
   * iSCSI target lun number.
   * @member {Number} lun
   */
  exports.prototype['lun'] = undefined;
  /**
   * iSCSI target portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   * @member {Array.<String>} portals
   */
  exports.prototype['portals'] = undefined;
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   * @member {String} targetPortal
   */
  exports.prototype['targetPortal'] = undefined;



  return exports;
}));


