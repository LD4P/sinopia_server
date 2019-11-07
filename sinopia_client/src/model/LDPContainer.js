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
    define(['ApiClient', 'model/Resource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Resource'));
  } else {
    // Browser globals (root is window)
    if (!root.SinopiaServer) {
      root.SinopiaServer = {};
    }
    root.SinopiaServer.LDPContainer = factory(root.SinopiaServer.ApiClient, root.SinopiaServer.Resource);
  }
}(this, function(ApiClient, Resource) {
  'use strict';




  /**
   * The LDPContainer model module.
   * @module model/LDPContainer
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>LDPContainer</code>.
   * @alias module:model/LDPContainer
   * @class
   * @param containerID {String} 
   * @param name {String} 
   * @param URI {String} 
   * @param resources {Array.<module:model/Resource>} 
   */
  var exports = function(containerID, name, URI, resources) {
    var _this = this;

    _this['containerID'] = containerID;
    _this['name'] = name;
    _this['URI'] = URI;
    _this['resources'] = resources;
  };

  /**
   * Constructs a <code>LDPContainer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LDPContainer} obj Optional instance to populate.
   * @return {module:model/LDPContainer} The populated <code>LDPContainer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('containerID')) {
        obj['containerID'] = ApiClient.convertToType(data['containerID'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('URI')) {
        obj['URI'] = ApiClient.convertToType(data['URI'], 'String');
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], [Resource]);
      }
    }
    return obj;
  }

  /**
   * @member {String} containerID
   */
  exports.prototype['containerID'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} URI
   */
  exports.prototype['URI'] = undefined;
  /**
   * @member {Array.<module:model/Resource>} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));


