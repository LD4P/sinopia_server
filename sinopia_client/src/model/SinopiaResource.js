/**
 * Sinopia Server
 * Sinopia Server. Supports CRUD, following loosely LDP, on Sinopia resources. Top level requires special authorization for creating a group's graph (i.e. PCC, Stanford, etc.).
 *
 * OpenAPI spec version: 3.0.2
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
    define(['ApiClient', 'model/ResourceContext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceContext'));
  } else {
    // Browser globals (root is window)
    if (!root.SinopiaServer) {
      root.SinopiaServer = {};
    }
    root.SinopiaServer.SinopiaResource = factory(root.SinopiaServer.ApiClient, root.SinopiaServer.ResourceContext);
  }
}(this, function(ApiClient, ResourceContext) {
  'use strict';




  /**
   * The SinopiaResource model module.
   * @module model/SinopiaResource
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>SinopiaResource</code>.
   * @alias module:model/SinopiaResource
   * @class
   * @param id {String} 
   * @param context {module:model/ResourceContext} 
   * @param title {String} 
   */
  var exports = function(id, context, title) {
    var _this = this;


    _this['@id'] = id;
    _this['@context'] = context;
    _this['title'] = title;
  };

  /**
   * Constructs a <code>SinopiaResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SinopiaResource} obj Optional instance to populate.
   * @return {module:model/SinopiaResource} The populated <code>SinopiaResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('@graph')) {
        obj['@graph'] = ApiClient.convertToType(data['@graph'], [Object]);
      }
      if (data.hasOwnProperty('@id')) {
        obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
      }
      if (data.hasOwnProperty('@context')) {
        obj['@context'] = ResourceContext.constructFromObject(data['@context']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} @graph
   */
  exports.prototype['@graph'] = undefined;
  /**
   * @member {String} @id
   */
  exports.prototype['@id'] = undefined;
  /**
   * @member {module:model/ResourceContext} @context
   */
  exports.prototype['@context'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


