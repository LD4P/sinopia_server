/**
 * Sinopia Server
 * Sinopia Server. Supports CRUD, following loosely LDP, on Sinopia resources. Top level requires special authorization for creating a group's graph (i.e. PCC, Stanford, etc.).
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SinopiaServer) {
      root.SinopiaServer = {};
    }
    root.SinopiaServer.Variable = factory(root.SinopiaServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Variable model module.
   * @module model/Variable
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Variable</code>.
   * @alias module:model/Variable
   * @class
   * @param id {String} 
   * @param type {String} 
   */
  var exports = function(id, type) {
    var _this = this;

    _this['@id'] = id;
    _this['@type'] = type;
  };

  /**
   * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Variable} obj Optional instance to populate.
   * @return {module:model/Variable} The populated <code>Variable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('@id')) {
        obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
      }
      if (data.hasOwnProperty('@type')) {
        obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} @id
   */
  exports.prototype['@id'] = undefined;
  /**
   * @member {String} @type
   */
  exports.prototype['@type'] = undefined;



  return exports;
}));


