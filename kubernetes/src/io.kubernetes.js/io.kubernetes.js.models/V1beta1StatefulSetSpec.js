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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1LabelSelector', 'io.kubernetes.js/io.kubernetes.js.models/V1PersistentVolumeClaim', 'io.kubernetes.js/io.kubernetes.js.models/V1PodTemplateSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LabelSelector'), require('./V1PersistentVolumeClaim'), require('./V1PodTemplateSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1StatefulSetSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1LabelSelector, root.KubernetesJsClient.V1PersistentVolumeClaim, root.KubernetesJsClient.V1PodTemplateSpec);
  }
}(this, function(ApiClient, V1LabelSelector, V1PersistentVolumeClaim, V1PodTemplateSpec) {
  'use strict';




  /**
   * The V1beta1StatefulSetSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1StatefulSetSpec
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1StatefulSetSpec</code>.
   * A StatefulSetSpec is the specification of a StatefulSet.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1StatefulSetSpec
   * @class
   * @param serviceName {String} ServiceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where \"pod-specific-string\" is managed by the StatefulSet controller.
   * @param template {module:io.kubernetes.js/io.kubernetes.js.models/V1PodTemplateSpec} Template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
   */
  var exports = function(serviceName, template) {
    var _this = this;



    _this['serviceName'] = serviceName;
    _this['template'] = template;

  };

  /**
   * Constructs a <code>V1beta1StatefulSetSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1StatefulSetSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1StatefulSetSpec} The populated <code>V1beta1StatefulSetSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('replicas')) {
        obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
      }
      if (data.hasOwnProperty('serviceName')) {
        obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = V1PodTemplateSpec.constructFromObject(data['template']);
      }
      if (data.hasOwnProperty('volumeClaimTemplates')) {
        obj['volumeClaimTemplates'] = ApiClient.convertToType(data['volumeClaimTemplates'], [V1PersistentVolumeClaim]);
      }
    }
    return obj;
  }

  /**
   * Replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
   * @member {Number} replicas
   */
  exports.prototype['replicas'] = undefined;
  /**
   * Selector is a label query over pods that should match the replica count. If empty, defaulted to labels on the pod template. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1LabelSelector} selector
   */
  exports.prototype['selector'] = undefined;
  /**
   * ServiceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where \"pod-specific-string\" is managed by the StatefulSet controller.
   * @member {String} serviceName
   */
  exports.prototype['serviceName'] = undefined;
  /**
   * Template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1PodTemplateSpec} template
   */
  exports.prototype['template'] = undefined;
  /**
   * VolumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1PersistentVolumeClaim>} volumeClaimTemplates
   */
  exports.prototype['volumeClaimTemplates'] = undefined;



  return exports;
}));


