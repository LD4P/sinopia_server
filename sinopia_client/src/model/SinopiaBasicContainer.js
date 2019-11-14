/**
 * Sinopia Server
 * Sinopia Server. Supports CRUD, following loosely LDP, on Sinopia resources. Top level requires special authorization for creating a group's graph (i.e. PCC, Stanford, etc.).
 *
 * OpenAPI spec version: 3.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SinopiaBasicContainerContext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SinopiaBasicContainerContext'));
  } else {
    // Browser globals (root is window)
    if (!root.SinopiaServer) {
      root.SinopiaServer = {};
    }
    root.SinopiaServer.SinopiaBasicContainer = factory(root.SinopiaServer.ApiClient, root.SinopiaServer.SinopiaBasicContainerContext);
  }
}(this, function(ApiClient, SinopiaBasicContainerContext) {
  'use strict';




  /**
   * The SinopiaBasicContainer model module.
   * @module model/SinopiaBasicContainer
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>SinopiaBasicContainer</code>.
   * @alias module:model/SinopiaBasicContainer
   * @class
   * @param id {String} 
   * @param context {module:model/SinopiaBasicContainerContext} 
   * @param type {Array.<String>} 
   * @param rdfslabel {String} 
   */
  var exports = function(id, context, type, rdfslabel) {
    var _this = this;

    _this['@id'] = id;
    _this['@context'] = context;
    _this['@type'] = type;
    _this['rdfs:label'] = rdfslabel;

  };

  /**
   * Constructs a <code>SinopiaBasicContainer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SinopiaBasicContainer} obj Optional instance to populate.
   * @return {module:model/SinopiaBasicContainer} The populated <code>SinopiaBasicContainer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('@id')) {
        obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
      }
      if (data.hasOwnProperty('@context')) {
        obj['@context'] = SinopiaBasicContainerContext.constructFromObject(data['@context']);
      }
      if (data.hasOwnProperty('@type')) {
        obj['@type'] = ApiClient.convertToType(data['@type'], ['String']);
      }
      if (data.hasOwnProperty('rdfs:label')) {
        obj['rdfs:label'] = ApiClient.convertToType(data['rdfs:label'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} @id
   */
  exports.prototype['@id'] = undefined;
  /**
   * @member {module:model/SinopiaBasicContainerContext} @context
   */
  exports.prototype['@context'] = undefined;
  /**
   * @member {Array.<String>} @type
   */
  exports.prototype['@type'] = undefined;
  /**
   * @member {String} rdfs:label
   */
  exports.prototype['rdfs:label'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;



  return exports;
}));


