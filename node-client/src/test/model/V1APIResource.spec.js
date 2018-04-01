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
    instance = new KubernetesJsClient.V1APIResource();
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

  describe('V1APIResource', function() {
    it('should create an instance of V1APIResource', function() {
      // uncomment below and update the code to test V1APIResource
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be.a(KubernetesJsClient.V1APIResource);
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property namespaced (base name: "namespaced")', function() {
      // uncomment below and update the code to test the property namespaced
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property shortNames (base name: "shortNames")', function() {
      // uncomment below and update the code to test the property shortNames
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property singularName (base name: "singularName")', function() {
      // uncomment below and update the code to test the property singularName
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property verbs (base name: "verbs")', function() {
      // uncomment below and update the code to test the property verbs
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new KubernetesJsClient.V1APIResource();
      //expect(instance).to.be();
    });

  });

}));
