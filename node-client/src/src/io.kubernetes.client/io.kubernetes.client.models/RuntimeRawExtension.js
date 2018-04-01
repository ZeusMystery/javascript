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
* The RuntimeRawExtension model module.
* @module io.kubernetes.client/io.kubernetes.client.models/RuntimeRawExtension
* @version 0.3-SNAPSHOT
*/
export default class RuntimeRawExtension {
    /**
    * Constructs a new <code>RuntimeRawExtension</code>.
    * RawExtension is used to hold extensions in external versions.  To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.  // Internal package: type MyAPIObject struct {  runtime.TypeMeta &#x60;json:\&quot;,inline\&quot;&#x60;  MyPlugin runtime.Object &#x60;json:\&quot;myPlugin\&quot;&#x60; } type PluginA struct {  AOption string &#x60;json:\&quot;aOption\&quot;&#x60; }  // External package: type MyAPIObject struct {  runtime.TypeMeta &#x60;json:\&quot;,inline\&quot;&#x60;  MyPlugin runtime.RawExtension &#x60;json:\&quot;myPlugin\&quot;&#x60; } type PluginA struct {  AOption string &#x60;json:\&quot;aOption\&quot;&#x60; }  // On the wire, the JSON will look something like this: {  \&quot;kind\&quot;:\&quot;MyAPIObject\&quot;,  \&quot;apiVersion\&quot;:\&quot;v1\&quot;,  \&quot;myPlugin\&quot;: {   \&quot;kind\&quot;:\&quot;PluginA\&quot;,   \&quot;aOption\&quot;:\&quot;foo\&quot;,  }, }  So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package&#39;s DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/RuntimeRawExtension
    * @class
    * @param raw {Blob} Raw is the underlying serialization of this object.
    */

    constructor(raw) {
        

        
        

        this['Raw'] = raw;

        
    }

    /**
    * Constructs a <code>RuntimeRawExtension</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/RuntimeRawExtension} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/RuntimeRawExtension} The populated <code>RuntimeRawExtension</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuntimeRawExtension();

            
            
            

            if (data.hasOwnProperty('Raw')) {
                obj['Raw'] = ApiClient.convertToType(data['Raw'], 'Blob');
            }
        }
        return obj;
    }

    /**
    * Raw is the underlying serialization of this object.
    * @member {Blob} Raw
    */
    Raw = undefined;








}


