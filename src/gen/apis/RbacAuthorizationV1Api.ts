// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { V1APIResourceList } from '../models/V1APIResourceList';
import { V1ClusterRole } from '../models/V1ClusterRole';
import { V1ClusterRoleBinding } from '../models/V1ClusterRoleBinding';
import { V1ClusterRoleBindingList } from '../models/V1ClusterRoleBindingList';
import { V1ClusterRoleList } from '../models/V1ClusterRoleList';
import { V1DeleteOptions } from '../models/V1DeleteOptions';
import { V1Role } from '../models/V1Role';
import { V1RoleBinding } from '../models/V1RoleBinding';
import { V1RoleBindingList } from '../models/V1RoleBindingList';
import { V1RoleList } from '../models/V1RoleList';
import { V1Status } from '../models/V1Status';

/**
 * no description
 */
export class RbacAuthorizationV1ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * create a ClusterRole
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async createClusterRole(body: V1ClusterRole, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "createClusterRole", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterroles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1ClusterRole", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * create a ClusterRoleBinding
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async createClusterRoleBinding(body: V1ClusterRoleBinding, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "createClusterRoleBinding", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1ClusterRoleBinding", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * create a Role
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async createNamespacedRole(namespace: string, body: V1Role, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "createNamespacedRole", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "createNamespacedRole", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1Role", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * create a RoleBinding
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async createNamespacedRoleBinding(namespace: string, body: V1RoleBinding, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "createNamespacedRoleBinding", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "createNamespacedRoleBinding", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1RoleBinding", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete a ClusterRole
     * @param name name of the ClusterRole
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
    public async deleteClusterRole(name: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteClusterRole", "name");
        }








        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete a ClusterRoleBinding
     * @param name name of the ClusterRoleBinding
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
    public async deleteClusterRoleBinding(name: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteClusterRoleBinding", "name");
        }








        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete collection of ClusterRole
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
    public async deleteCollectionClusterRole(pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterroles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete collection of ClusterRoleBinding
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
    public async deleteCollectionClusterRoleBinding(pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete collection of Role
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
    public async deleteCollectionNamespacedRole(namespace: string, pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteCollectionNamespacedRole", "namespace");
        }















        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete collection of RoleBinding
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
    public async deleteCollectionNamespacedRoleBinding(namespace: string, pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteCollectionNamespacedRoleBinding", "namespace");
        }















        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete a Role
     * @param name name of the Role
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
    public async deleteNamespacedRole(name: string, namespace: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteNamespacedRole", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteNamespacedRole", "namespace");
        }








        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete a RoleBinding
     * @param name name of the RoleBinding
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
    public async deleteNamespacedRoleBinding(name: string, namespace: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteNamespacedRoleBinding", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "deleteNamespacedRoleBinding", "namespace");
        }








        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("gracePeriodSeconds", ObjectSerializer.serialize(gracePeriodSeconds, "number", ""));
        }

        // Query Params
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam("orphanDependents", ObjectSerializer.serialize(orphanDependents, "boolean", ""));
        }

        // Query Params
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam("propagationPolicy", ObjectSerializer.serialize(propagationPolicy, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1DeleteOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get available resources
     */
    public async getAPIResources(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list or watch objects of kind ClusterRole
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public async listClusterRole(pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterroles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (allowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("allowWatchBookmarks", ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }

        // Query Params
        if (watch !== undefined) {
            requestContext.setQueryParam("watch", ObjectSerializer.serialize(watch, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list or watch objects of kind ClusterRoleBinding
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public async listClusterRoleBinding(pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (allowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("allowWatchBookmarks", ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }

        // Query Params
        if (watch !== undefined) {
            requestContext.setQueryParam("watch", ObjectSerializer.serialize(watch, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list or watch objects of kind Role
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public async listNamespacedRole(namespace: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "listNamespacedRole", "namespace");
        }












        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (allowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("allowWatchBookmarks", ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }

        // Query Params
        if (watch !== undefined) {
            requestContext.setQueryParam("watch", ObjectSerializer.serialize(watch, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list or watch objects of kind RoleBinding
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public async listNamespacedRoleBinding(namespace: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "listNamespacedRoleBinding", "namespace");
        }












        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (allowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("allowWatchBookmarks", ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }

        // Query Params
        if (watch !== undefined) {
            requestContext.setQueryParam("watch", ObjectSerializer.serialize(watch, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list or watch objects of kind RoleBinding
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public async listRoleBindingForAllNamespaces(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/rolebindings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("allowWatchBookmarks", ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }

        // Query Params
        if (watch !== undefined) {
            requestContext.setQueryParam("watch", ObjectSerializer.serialize(watch, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list or watch objects of kind Role
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public async listRoleForAllNamespaces(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/roles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("allowWatchBookmarks", ObjectSerializer.serialize(allowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (_continue !== undefined) {
            requestContext.setQueryParam("continue", ObjectSerializer.serialize(_continue, "string", ""));
        }

        // Query Params
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam("fieldSelector", ObjectSerializer.serialize(fieldSelector, "string", ""));
        }

        // Query Params
        if (labelSelector !== undefined) {
            requestContext.setQueryParam("labelSelector", ObjectSerializer.serialize(labelSelector, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (resourceVersion !== undefined) {
            requestContext.setQueryParam("resourceVersion", ObjectSerializer.serialize(resourceVersion, "string", ""));
        }

        // Query Params
        if (resourceVersionMatch !== undefined) {
            requestContext.setQueryParam("resourceVersionMatch", ObjectSerializer.serialize(resourceVersionMatch, "string", ""));
        }

        // Query Params
        if (timeoutSeconds !== undefined) {
            requestContext.setQueryParam("timeoutSeconds", ObjectSerializer.serialize(timeoutSeconds, "number", ""));
        }

        // Query Params
        if (watch !== undefined) {
            requestContext.setQueryParam("watch", ObjectSerializer.serialize(watch, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * partially update the specified ClusterRole
     * @param name name of the ClusterRole
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    public async patchClusterRole(name: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchClusterRole", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchClusterRole", "body");
        }






        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/merge-patch+json",
        
            "application/strategic-merge-patch+json",
        
            "application/apply-patch+yaml"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * partially update the specified ClusterRoleBinding
     * @param name name of the ClusterRoleBinding
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    public async patchClusterRoleBinding(name: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchClusterRoleBinding", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchClusterRoleBinding", "body");
        }






        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/merge-patch+json",
        
            "application/strategic-merge-patch+json",
        
            "application/apply-patch+yaml"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * partially update the specified Role
     * @param name name of the Role
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    public async patchNamespacedRole(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchNamespacedRole", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchNamespacedRole", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchNamespacedRole", "body");
        }






        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/merge-patch+json",
        
            "application/strategic-merge-patch+json",
        
            "application/apply-patch+yaml"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * partially update the specified RoleBinding
     * @param name name of the RoleBinding
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    public async patchNamespacedRoleBinding(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchNamespacedRoleBinding", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchNamespacedRoleBinding", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "patchNamespacedRoleBinding", "body");
        }






        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/merge-patch+json",
        
            "application/strategic-merge-patch+json",
        
            "application/apply-patch+yaml"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * read the specified ClusterRole
     * @param name name of the ClusterRole
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
    public async readClusterRole(name: string, pretty?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "readClusterRole", "name");
        }



        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * read the specified ClusterRoleBinding
     * @param name name of the ClusterRoleBinding
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
    public async readClusterRoleBinding(name: string, pretty?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "readClusterRoleBinding", "name");
        }



        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * read the specified Role
     * @param name name of the Role
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
    public async readNamespacedRole(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "readNamespacedRole", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "readNamespacedRole", "namespace");
        }



        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * read the specified RoleBinding
     * @param name name of the RoleBinding
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
    public async readNamespacedRoleBinding(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "readNamespacedRoleBinding", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "readNamespacedRoleBinding", "namespace");
        }



        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * replace the specified ClusterRole
     * @param name name of the ClusterRole
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async replaceClusterRole(name: string, body: V1ClusterRole, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceClusterRole", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceClusterRole", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1ClusterRole", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * replace the specified ClusterRoleBinding
     * @param name name of the ClusterRoleBinding
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async replaceClusterRoleBinding(name: string, body: V1ClusterRoleBinding, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceClusterRoleBinding", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceClusterRoleBinding", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1ClusterRoleBinding", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * replace the specified Role
     * @param name name of the Role
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async replaceNamespacedRole(name: string, namespace: string, body: V1Role, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceNamespacedRole", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceNamespacedRole", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceNamespacedRole", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1Role", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * replace the specified RoleBinding
     * @param name name of the RoleBinding
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public async replaceNamespacedRoleBinding(name: string, namespace: string, body: V1RoleBinding, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceNamespacedRoleBinding", "name");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceNamespacedRoleBinding", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("RbacAuthorizationV1Api", "replaceNamespacedRoleBinding", "body");
        }





        // Path Params
        const localVarPath = '/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "string", ""));
        }

        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer.serialize(dryRun, "string", ""));
        }

        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer.serialize(fieldManager, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1RoleBinding", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RbacAuthorizationV1ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createClusterRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createClusterRole(response: ResponseContext): Promise<V1ClusterRole > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createClusterRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createClusterRoleBinding(response: ResponseContext): Promise<V1ClusterRoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNamespacedRole(response: ResponseContext): Promise<V1Role > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNamespacedRoleBinding(response: ResponseContext): Promise<V1RoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteClusterRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteClusterRole(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteClusterRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteClusterRoleBinding(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionClusterRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCollectionClusterRole(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionClusterRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCollectionClusterRoleBinding(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCollectionNamespacedRole(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCollectionNamespacedRoleBinding(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNamespacedRole(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNamespacedRoleBinding(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAPIResources(response: ResponseContext): Promise<V1APIResourceList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1APIResourceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1APIResourceList", ""
            ) as V1APIResourceList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1APIResourceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1APIResourceList", ""
            ) as V1APIResourceList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listClusterRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listClusterRole(response: ResponseContext): Promise<V1ClusterRoleList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRoleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleList", ""
            ) as V1ClusterRoleList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRoleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleList", ""
            ) as V1ClusterRoleList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listClusterRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listClusterRoleBinding(response: ResponseContext): Promise<V1ClusterRoleBindingList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRoleBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBindingList", ""
            ) as V1ClusterRoleBindingList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRoleBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBindingList", ""
            ) as V1ClusterRoleBindingList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNamespacedRole(response: ResponseContext): Promise<V1RoleList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleList", ""
            ) as V1RoleList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleList", ""
            ) as V1RoleList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNamespacedRoleBinding(response: ResponseContext): Promise<V1RoleBindingList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBindingList", ""
            ) as V1RoleBindingList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBindingList", ""
            ) as V1RoleBindingList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleBindingForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRoleBindingForAllNamespaces(response: ResponseContext): Promise<V1RoleBindingList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBindingList", ""
            ) as V1RoleBindingList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBindingList", ""
            ) as V1RoleBindingList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRoleForAllNamespaces(response: ResponseContext): Promise<V1RoleList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleList", ""
            ) as V1RoleList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleList", ""
            ) as V1RoleList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchClusterRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchClusterRole(response: ResponseContext): Promise<V1ClusterRole > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchClusterRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchClusterRoleBinding(response: ResponseContext): Promise<V1ClusterRoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchNamespacedRole(response: ResponseContext): Promise<V1Role > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchNamespacedRoleBinding(response: ResponseContext): Promise<V1RoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readClusterRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readClusterRole(response: ResponseContext): Promise<V1ClusterRole > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readClusterRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readClusterRoleBinding(response: ResponseContext): Promise<V1ClusterRoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readNamespacedRole(response: ResponseContext): Promise<V1Role > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readNamespacedRoleBinding(response: ResponseContext): Promise<V1RoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceClusterRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceClusterRole(response: ResponseContext): Promise<V1ClusterRole > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRole = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRole", ""
            ) as V1ClusterRole;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceClusterRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceClusterRoleBinding(response: ResponseContext): Promise<V1ClusterRoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1ClusterRoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1ClusterRoleBinding", ""
            ) as V1ClusterRoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceNamespacedRole(response: ResponseContext): Promise<V1Role > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Role", ""
            ) as V1Role;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedRoleBinding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceNamespacedRoleBinding(response: ResponseContext): Promise<V1RoleBinding > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1RoleBinding = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1RoleBinding", ""
            ) as V1RoleBinding;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
