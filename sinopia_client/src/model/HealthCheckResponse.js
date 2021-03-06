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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SinopiaServer) {
      root.SinopiaServer = {};
    }
    root.SinopiaServer.HealthCheckResponse = factory(root.SinopiaServer.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HealthCheckResponse model module.
   * @module model/HealthCheckResponse
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>HealthCheckResponse</code>.
   * @alias module:model/HealthCheckResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>HealthCheckResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthCheckResponse} obj Optional instance to populate.
   * @return {module:model/HealthCheckResponse} The populated <code>HealthCheckResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * The status of the service
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


