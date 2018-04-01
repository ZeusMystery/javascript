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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V1PodSecurityContext();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1PodSecurityContext', function() {
    it('should create an instance of V1PodSecurityContext', function() {
      // uncomment below and update the code to test V1PodSecurityContext
      //var instane = new KubernetesJsClient.V1PodSecurityContext();
      //expect(instance).to.be.a(KubernetesJsClient.V1PodSecurityContext);
    });

    it('should have the property fsGroup (base name: "fsGroup")', function() {
      // uncomment below and update the code to test the property fsGroup
      //var instane = new KubernetesJsClient.V1PodSecurityContext();
      //expect(instance).to.be();
    });

    it('should have the property runAsGroup (base name: "runAsGroup")', function() {
      // uncomment below and update the code to test the property runAsGroup
      //var instane = new KubernetesJsClient.V1PodSecurityContext();
      //expect(instance).to.be();
    });

    it('should have the property runAsNonRoot (base name: "runAsNonRoot")', function() {
      // uncomment below and update the code to test the property runAsNonRoot
      //var instane = new KubernetesJsClient.V1PodSecurityContext();
      //expect(instance).to.be();
    });

    it('should have the property runAsUser (base name: "runAsUser")', function() {
      // uncomment below and update the code to test the property runAsUser
      //var instane = new KubernetesJsClient.V1PodSecurityContext();
      //expect(instance).to.be();
    });

    it('should have the property seLinuxOptions (base name: "seLinuxOptions")', function() {
      // uncomment below and update the code to test the property seLinuxOptions
      //var instane = new KubernetesJsClient.V1PodSecurityContext();
      //expect(instance).to.be();
    });

    it('should have the property supplementalGroups (base name: "supplementalGroups")', function() {
      // uncomment below and update the code to test the property supplementalGroups
      //var instane = new KubernetesJsClient.V1PodSecurityContext();
      //expect(instance).to.be();
    });

  });

}));
