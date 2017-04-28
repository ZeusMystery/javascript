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
    root.KubernetesJsClient.V1ContainerStateWaiting = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1ContainerStateWaiting model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateWaiting
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1ContainerStateWaiting</code>.
   * ContainerStateWaiting is a waiting state of a container.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateWaiting
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1ContainerStateWaiting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateWaiting} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateWaiting} The populated <code>V1ContainerStateWaiting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * Message regarding why the container is not yet running.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * (brief) reason the container is not yet running.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;



  return exports;
}));


