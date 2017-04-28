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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1APIResourceList', 'io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions', 'io.kubernetes.js/io.kubernetes.js.models/V1Status', 'io.kubernetes.js/io.kubernetes.js.models/V1StorageClass', 'io.kubernetes.js/io.kubernetes.js.models/V1StorageClassList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../io.kubernetes.js.models/V1APIResourceList'), require('../io.kubernetes.js.models/V1DeleteOptions'), require('../io.kubernetes.js.models/V1Status'), require('../io.kubernetes.js.models/V1StorageClass'), require('../io.kubernetes.js.models/V1StorageClassList'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.Storage_v1Api = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1APIResourceList, root.KubernetesJsClient.V1DeleteOptions, root.KubernetesJsClient.V1Status, root.KubernetesJsClient.V1StorageClass, root.KubernetesJsClient.V1StorageClassList);
  }
}(this, function(ApiClient, V1APIResourceList, V1DeleteOptions, V1Status, V1StorageClass, V1StorageClassList) {
  'use strict';

  /**
   * Storage_v1 service.
   * @module io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new Storage_v1Api. 
   * @alias module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api
   * @class
   * @param {module:io.kubernetes.js/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:io.kubernetes.js/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createStorageClass operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~createStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a StorageClass
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~createStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass}
     */
    this.createStorageClass = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling createStorageClass");
      }


      var pathParams = {
      };
      var queryParams = {
        'pretty': opts['pretty']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*/*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/storageclasses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollectionStorageClass operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~deleteCollectionStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete collection of StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~deleteCollectionStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1Status}
     */
    this.deleteCollectionStorageClass = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*/*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1Status;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/storageclasses', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStorageClass operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~deleteStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a StorageClass
     * @param {String} name name of the StorageClass
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Number} opts.gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param {Boolean} opts.orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param {String} opts.propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~deleteStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1Status}
     */
    this.deleteStorageClass = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling deleteStorageClass");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling deleteStorageClass");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'gracePeriodSeconds': opts['gracePeriodSeconds'],
        'orphanDependents': opts['orphanDependents'],
        'propagationPolicy': opts['propagationPolicy']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*/*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1Status;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/storageclasses/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIResources operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~getAPIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1APIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~getAPIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1APIResourceList}
     */
    this.getAPIResources = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1APIResourceList;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listStorageClass operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~listStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClassList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list or watch objects of kind StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~listStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClassList}
     */
    this.listStorageClass = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*/*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      var returnType = V1StorageClassList;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/storageclasses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchStorageClass operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~patchStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * partially update the specified StorageClass
     * @param {String} name name of the StorageClass
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~patchStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass}
     */
    this.patchStorageClass = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling patchStorageClass");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling patchStorageClass");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'pretty': opts['pretty']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['application/json-patch+json', 'application/merge-patch+json', 'application/strategic-merge-patch+json'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/storageclasses/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readStorageClass operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~readStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read the specified StorageClass
     * @param {String} name name of the StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Boolean} opts.exact Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param {Boolean} opts._export Should this value be exported.  Export strips fields that a user can not specify.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~readStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass}
     */
    this.readStorageClass = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling readStorageClass");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'exact': opts['exact'],
        'export': opts['_export']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*/*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/storageclasses/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceStorageClass operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~replaceStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replace the specified StorageClass
     * @param {String} name name of the StorageClass
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/Storage_v1Api~replaceStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1StorageClass}
     */
    this.replaceStorageClass = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling replaceStorageClass");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling replaceStorageClass");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'pretty': opts['pretty']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*/*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1/storageclasses/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
