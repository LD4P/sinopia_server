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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/ErrorResponse', 'model/ErrorSource', 'model/HealthCheckResponse', 'model/LDPContainer', 'model/Resource', 'model/ResourceContext', 'model/ResourceInfo', 'model/SinopiaBasicContainer', 'model/SinopiaBasicContainerContext', 'model/SinopiaResource', 'model/Variable', 'api/DefaultApi', 'api/LDPApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Error'), require('./model/ErrorResponse'), require('./model/ErrorSource'), require('./model/HealthCheckResponse'), require('./model/LDPContainer'), require('./model/Resource'), require('./model/ResourceContext'), require('./model/ResourceInfo'), require('./model/SinopiaBasicContainer'), require('./model/SinopiaBasicContainerContext'), require('./model/SinopiaResource'), require('./model/Variable'), require('./api/DefaultApi'), require('./api/LDPApi'));
  }
}(function(ApiClient, Error, ErrorResponse, ErrorSource, HealthCheckResponse, LDPContainer, Resource, ResourceContext, ResourceInfo, SinopiaBasicContainer, SinopiaBasicContainerContext, SinopiaResource, Variable, DefaultApi, LDPApi) {
  'use strict';

  /**
   * Sinopia_Server__Supports_CRUD_following_loosely_LDP_on_Sinopia_resources__Top_level_requires_special_authorization_for_creating_a_groups_graph__i_e__PCC_Stanford_etc__.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SinopiaServer = require('index'); // See note below*.
   * var xxxSvc = new SinopiaServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SinopiaServer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SinopiaServer.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SinopiaServer.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The ErrorSource model constructor.
     * @property {module:model/ErrorSource}
     */
    ErrorSource: ErrorSource,
    /**
     * The HealthCheckResponse model constructor.
     * @property {module:model/HealthCheckResponse}
     */
    HealthCheckResponse: HealthCheckResponse,
    /**
     * The LDPContainer model constructor.
     * @property {module:model/LDPContainer}
     */
    LDPContainer: LDPContainer,
    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource: Resource,
    /**
     * The ResourceContext model constructor.
     * @property {module:model/ResourceContext}
     */
    ResourceContext: ResourceContext,
    /**
     * The ResourceInfo model constructor.
     * @property {module:model/ResourceInfo}
     */
    ResourceInfo: ResourceInfo,
    /**
     * The SinopiaBasicContainer model constructor.
     * @property {module:model/SinopiaBasicContainer}
     */
    SinopiaBasicContainer: SinopiaBasicContainer,
    /**
     * The SinopiaBasicContainerContext model constructor.
     * @property {module:model/SinopiaBasicContainerContext}
     */
    SinopiaBasicContainerContext: SinopiaBasicContainerContext,
    /**
     * The SinopiaResource model constructor.
     * @property {module:model/SinopiaResource}
     */
    SinopiaResource: SinopiaResource,
    /**
     * The Variable model constructor.
     * @property {module:model/Variable}
     */
    Variable: Variable,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi,
    /**
     * The LDPApi service constructor.
     * @property {module:api/LDPApi}
     */
    LDPApi: LDPApi
  };

  return exports;
}));
