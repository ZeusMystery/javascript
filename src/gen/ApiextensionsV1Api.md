# .ApiextensionsV1Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomResourceDefinition**](ApiextensionsV1Api.md#createCustomResourceDefinition) | **POST** /apis/apiextensions.k8s.io/v1/customresourcedefinitions | 
[**deleteCollectionCustomResourceDefinition**](ApiextensionsV1Api.md#deleteCollectionCustomResourceDefinition) | **DELETE** /apis/apiextensions.k8s.io/v1/customresourcedefinitions | 
[**deleteCustomResourceDefinition**](ApiextensionsV1Api.md#deleteCustomResourceDefinition) | **DELETE** /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name} | 
[**getAPIResources**](ApiextensionsV1Api.md#getAPIResources) | **GET** /apis/apiextensions.k8s.io/v1/ | 
[**listCustomResourceDefinition**](ApiextensionsV1Api.md#listCustomResourceDefinition) | **GET** /apis/apiextensions.k8s.io/v1/customresourcedefinitions | 
[**patchCustomResourceDefinition**](ApiextensionsV1Api.md#patchCustomResourceDefinition) | **PATCH** /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name} | 
[**patchCustomResourceDefinitionStatus**](ApiextensionsV1Api.md#patchCustomResourceDefinitionStatus) | **PATCH** /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status | 
[**readCustomResourceDefinition**](ApiextensionsV1Api.md#readCustomResourceDefinition) | **GET** /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name} | 
[**readCustomResourceDefinitionStatus**](ApiextensionsV1Api.md#readCustomResourceDefinitionStatus) | **GET** /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status | 
[**replaceCustomResourceDefinition**](ApiextensionsV1Api.md#replaceCustomResourceDefinition) | **PUT** /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name} | 
[**replaceCustomResourceDefinitionStatus**](ApiextensionsV1Api.md#replaceCustomResourceDefinitionStatus) | **PUT** /apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status | 


# **createCustomResourceDefinition**
> V1CustomResourceDefinition createCustomResourceDefinition(body)

create a CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiCreateCustomResourceDefinitionRequest = {
  // V1CustomResourceDefinition
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      conversion: {
        strategy: "strategy_example",
        webhook: {
          clientConfig: {
            caBundle: 'YQ==',
            service: {
              name: "name_example",
              namespace: "namespace_example",
              path: "path_example",
              port: 1,
            },
            url: "url_example",
          },
          conversionReviewVersions: [
            "conversionReviewVersions_example",
          ],
        },
      },
      group: "group_example",
      names: {
        categories: [
          "categories_example",
        ],
        kind: "kind_example",
        listKind: "listKind_example",
        plural: "plural_example",
        shortNames: [
          "shortNames_example",
        ],
        singular: "singular_example",
      },
      preserveUnknownFields: true,
      scope: "scope_example",
      versions: [
        {
          additionalPrinterColumns: [
            {
              description: "description_example",
              format: "format_example",
              jsonPath: "jsonPath_example",
              name: "name_example",
              priority: 1,
              type: "type_example",
            },
          ],
          deprecated: true,
          deprecationWarning: "deprecationWarning_example",
          name: "name_example",
          schema: {
            openAPIV3Schema: {
              ref: "ref_example",
              schema: "schema_example",
              additionalItems: {},
              additionalProperties: {},
              allOf: [
                ,
              ],
              anyOf: [
                ,
              ],
              _default: {},
              definitions: {
                "key": ,
              },
              dependencies: {
                "key": {},
              },
              description: "description_example",
              _enum: [
                {},
              ],
              example: {},
              exclusiveMaximum: true,
              exclusiveMinimum: true,
              externalDocs: {
                description: "description_example",
                url: "url_example",
              },
              format: "format_example",
              id: "id_example",
              items: {},
              maxItems: 1,
              maxLength: 1,
              maxProperties: 1,
              maximum: 3.14,
              minItems: 1,
              minLength: 1,
              minProperties: 1,
              minimum: 3.14,
              multipleOf: 3.14,
              not: ,
              nullable: true,
              oneOf: [
                ,
              ],
              pattern: "pattern_example",
              patternProperties: {
                "key": ,
              },
              properties: {
                "key": ,
              },
              required: [
                "required_example",
              ],
              title: "title_example",
              type: "type_example",
              uniqueItems: true,
              x_kubernetes_embedded_resource: true,
              x_kubernetes_int_or_string: true,
              x_kubernetes_list_map_keys: [
                "x_kubernetes_list_map_keys_example",
              ],
              x_kubernetes_list_type: "x_kubernetes_list_type_example",
              x_kubernetes_map_type: "x_kubernetes_map_type_example",
              x_kubernetes_preserve_unknown_fields: true,
            },
          },
          served: true,
          storage: true,
          subresources: {
            scale: {
              labelSelectorPath: "labelSelectorPath_example",
              specReplicasPath: "specReplicasPath_example",
              statusReplicasPath: "statusReplicasPath_example",
            },
            status: {},
          },
        },
      ],
    },
    status: {
      acceptedNames: {
        categories: [
          "categories_example",
        ],
        kind: "kind_example",
        listKind: "listKind_example",
        plural: "plural_example",
        shortNames: [
          "shortNames_example",
        ],
        singular: "singular_example",
      },
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      storedVersions: [
        "storedVersions_example",
      ],
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.createCustomResourceDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1CustomResourceDefinition**|  |
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinition**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCollectionCustomResourceDefinition**
> V1Status deleteCollectionCustomResourceDefinition()

delete collection of CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiDeleteCollectionCustomResourceDefinitionRequest = {
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteCollectionCustomResourceDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomResourceDefinition**
> V1Status deleteCustomResourceDefinition()

delete a CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiDeleteCustomResourceDefinitionRequest = {
  // string | name of the CustomResourceDefinition
  name: "name_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteCustomResourceDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **name** | [**string**] | name of the CustomResourceDefinition | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAPIResources**
> V1APIResourceList getAPIResources()

get available resources

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:any = {};

apiInstance.getAPIResources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1APIResourceList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomResourceDefinition**
> V1CustomResourceDefinitionList listCustomResourceDefinition()

list or watch objects of kind CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiListCustomResourceDefinitionRequest = {
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listCustomResourceDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinitionList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCustomResourceDefinition**
> V1CustomResourceDefinition patchCustomResourceDefinition(body)

partially update the specified CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiPatchCustomResourceDefinitionRequest = {
  // string | name of the CustomResourceDefinition
  name: "name_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchCustomResourceDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the CustomResourceDefinition | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinition**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCustomResourceDefinitionStatus**
> V1CustomResourceDefinition patchCustomResourceDefinitionStatus(body)

partially update status of the specified CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiPatchCustomResourceDefinitionStatusRequest = {
  // string | name of the CustomResourceDefinition
  name: "name_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchCustomResourceDefinitionStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the CustomResourceDefinition | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinition**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readCustomResourceDefinition**
> V1CustomResourceDefinition readCustomResourceDefinition()

read the specified CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiReadCustomResourceDefinitionRequest = {
  // string | name of the CustomResourceDefinition
  name: "name_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readCustomResourceDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the CustomResourceDefinition | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinition**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readCustomResourceDefinitionStatus**
> V1CustomResourceDefinition readCustomResourceDefinitionStatus()

read status of the specified CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiReadCustomResourceDefinitionStatusRequest = {
  // string | name of the CustomResourceDefinition
  name: "name_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readCustomResourceDefinitionStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the CustomResourceDefinition | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinition**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceCustomResourceDefinition**
> V1CustomResourceDefinition replaceCustomResourceDefinition(body)

replace the specified CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiReplaceCustomResourceDefinitionRequest = {
  // string | name of the CustomResourceDefinition
  name: "name_example",
  // V1CustomResourceDefinition
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      conversion: {
        strategy: "strategy_example",
        webhook: {
          clientConfig: {
            caBundle: 'YQ==',
            service: {
              name: "name_example",
              namespace: "namespace_example",
              path: "path_example",
              port: 1,
            },
            url: "url_example",
          },
          conversionReviewVersions: [
            "conversionReviewVersions_example",
          ],
        },
      },
      group: "group_example",
      names: {
        categories: [
          "categories_example",
        ],
        kind: "kind_example",
        listKind: "listKind_example",
        plural: "plural_example",
        shortNames: [
          "shortNames_example",
        ],
        singular: "singular_example",
      },
      preserveUnknownFields: true,
      scope: "scope_example",
      versions: [
        {
          additionalPrinterColumns: [
            {
              description: "description_example",
              format: "format_example",
              jsonPath: "jsonPath_example",
              name: "name_example",
              priority: 1,
              type: "type_example",
            },
          ],
          deprecated: true,
          deprecationWarning: "deprecationWarning_example",
          name: "name_example",
          schema: {
            openAPIV3Schema: {
              ref: "ref_example",
              schema: "schema_example",
              additionalItems: {},
              additionalProperties: {},
              allOf: [
                ,
              ],
              anyOf: [
                ,
              ],
              _default: {},
              definitions: {
                "key": ,
              },
              dependencies: {
                "key": {},
              },
              description: "description_example",
              _enum: [
                {},
              ],
              example: {},
              exclusiveMaximum: true,
              exclusiveMinimum: true,
              externalDocs: {
                description: "description_example",
                url: "url_example",
              },
              format: "format_example",
              id: "id_example",
              items: {},
              maxItems: 1,
              maxLength: 1,
              maxProperties: 1,
              maximum: 3.14,
              minItems: 1,
              minLength: 1,
              minProperties: 1,
              minimum: 3.14,
              multipleOf: 3.14,
              not: ,
              nullable: true,
              oneOf: [
                ,
              ],
              pattern: "pattern_example",
              patternProperties: {
                "key": ,
              },
              properties: {
                "key": ,
              },
              required: [
                "required_example",
              ],
              title: "title_example",
              type: "type_example",
              uniqueItems: true,
              x_kubernetes_embedded_resource: true,
              x_kubernetes_int_or_string: true,
              x_kubernetes_list_map_keys: [
                "x_kubernetes_list_map_keys_example",
              ],
              x_kubernetes_list_type: "x_kubernetes_list_type_example",
              x_kubernetes_map_type: "x_kubernetes_map_type_example",
              x_kubernetes_preserve_unknown_fields: true,
            },
          },
          served: true,
          storage: true,
          subresources: {
            scale: {
              labelSelectorPath: "labelSelectorPath_example",
              specReplicasPath: "specReplicasPath_example",
              statusReplicasPath: "statusReplicasPath_example",
            },
            status: {},
          },
        },
      ],
    },
    status: {
      acceptedNames: {
        categories: [
          "categories_example",
        ],
        kind: "kind_example",
        listKind: "listKind_example",
        plural: "plural_example",
        shortNames: [
          "shortNames_example",
        ],
        singular: "singular_example",
      },
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      storedVersions: [
        "storedVersions_example",
      ],
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceCustomResourceDefinition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1CustomResourceDefinition**|  |
 **name** | [**string**] | name of the CustomResourceDefinition | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinition**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceCustomResourceDefinitionStatus**
> V1CustomResourceDefinition replaceCustomResourceDefinitionStatus(body)

replace status of the specified CustomResourceDefinition

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsV1Api(configuration);

let body:.ApiextensionsV1ApiReplaceCustomResourceDefinitionStatusRequest = {
  // string | name of the CustomResourceDefinition
  name: "name_example",
  // V1CustomResourceDefinition
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      conversion: {
        strategy: "strategy_example",
        webhook: {
          clientConfig: {
            caBundle: 'YQ==',
            service: {
              name: "name_example",
              namespace: "namespace_example",
              path: "path_example",
              port: 1,
            },
            url: "url_example",
          },
          conversionReviewVersions: [
            "conversionReviewVersions_example",
          ],
        },
      },
      group: "group_example",
      names: {
        categories: [
          "categories_example",
        ],
        kind: "kind_example",
        listKind: "listKind_example",
        plural: "plural_example",
        shortNames: [
          "shortNames_example",
        ],
        singular: "singular_example",
      },
      preserveUnknownFields: true,
      scope: "scope_example",
      versions: [
        {
          additionalPrinterColumns: [
            {
              description: "description_example",
              format: "format_example",
              jsonPath: "jsonPath_example",
              name: "name_example",
              priority: 1,
              type: "type_example",
            },
          ],
          deprecated: true,
          deprecationWarning: "deprecationWarning_example",
          name: "name_example",
          schema: {
            openAPIV3Schema: {
              ref: "ref_example",
              schema: "schema_example",
              additionalItems: {},
              additionalProperties: {},
              allOf: [
                ,
              ],
              anyOf: [
                ,
              ],
              _default: {},
              definitions: {
                "key": ,
              },
              dependencies: {
                "key": {},
              },
              description: "description_example",
              _enum: [
                {},
              ],
              example: {},
              exclusiveMaximum: true,
              exclusiveMinimum: true,
              externalDocs: {
                description: "description_example",
                url: "url_example",
              },
              format: "format_example",
              id: "id_example",
              items: {},
              maxItems: 1,
              maxLength: 1,
              maxProperties: 1,
              maximum: 3.14,
              minItems: 1,
              minLength: 1,
              minProperties: 1,
              minimum: 3.14,
              multipleOf: 3.14,
              not: ,
              nullable: true,
              oneOf: [
                ,
              ],
              pattern: "pattern_example",
              patternProperties: {
                "key": ,
              },
              properties: {
                "key": ,
              },
              required: [
                "required_example",
              ],
              title: "title_example",
              type: "type_example",
              uniqueItems: true,
              x_kubernetes_embedded_resource: true,
              x_kubernetes_int_or_string: true,
              x_kubernetes_list_map_keys: [
                "x_kubernetes_list_map_keys_example",
              ],
              x_kubernetes_list_type: "x_kubernetes_list_type_example",
              x_kubernetes_map_type: "x_kubernetes_map_type_example",
              x_kubernetes_preserve_unknown_fields: true,
            },
          },
          served: true,
          storage: true,
          subresources: {
            scale: {
              labelSelectorPath: "labelSelectorPath_example",
              specReplicasPath: "specReplicasPath_example",
              statusReplicasPath: "statusReplicasPath_example",
            },
            status: {},
          },
        },
      ],
    },
    status: {
      acceptedNames: {
        categories: [
          "categories_example",
        ],
        kind: "kind_example",
        listKind: "listKind_example",
        plural: "plural_example",
        shortNames: [
          "shortNames_example",
        ],
        singular: "singular_example",
      },
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      storedVersions: [
        "storedVersions_example",
      ],
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceCustomResourceDefinitionStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1CustomResourceDefinition**|  |
 **name** | [**string**] | name of the CustomResourceDefinition | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1CustomResourceDefinition**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


