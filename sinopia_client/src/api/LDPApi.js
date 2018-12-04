/**
 * Sinopia Server
 * Sinopia Server. Supports CRUD, following loosely LDP, on Sinopia resources. Top level requires special authorization for creating a group's graph (i.e. PCC, Stanford, etc.).
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/ErrorResponse', 'model/LDPContainer', 'model/Resource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/LDPContainer'), require('../model/Resource'));
  } else {
    // Browser globals (root is window)
    if (!root.SinopiaServer) {
      root.SinopiaServer = {};
    }
    root.SinopiaServer.LDPApi = factory(root.SinopiaServer.ApiClient, root.SinopiaServer.ErrorResponse, root.SinopiaServer.LDPContainer, root.SinopiaServer.Resource);
  }
}(this, function(ApiClient, ErrorResponse, LDPContainer, Resource) {
  'use strict';

  /**
   * LDP service.
   * @module api/LDPApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LDPApi. 
   * @alias module:api/LDPApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBase operation.
     * @callback module:api/LDPApi~getBaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LDPContainer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get metadata for the base container.
     * Get the RDF metadata (default serialization is JSON-LD) for the base container.
     * @param {module:api/LDPApi~getBaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LDPContainer}
     */
    this.getBase = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['RemoteUser'];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = LDPContainer;

      return this.apiClient.callApi(
        '/repository', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryGroupIDDelete operation.
     * @callback module:api/LDPApi~repositoryGroupIDDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes LDP container 
     * @param {Number} groupID LDP Container to get
     * @param {module:api/LDPApi~repositoryGroupIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryGroupIDDelete = function(groupID, callback) {
      var postBody = null;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling repositoryGroupIDDelete");
      }


      var pathParams = {
        'groupID': groupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository/{groupID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryGroupIDHead operation.
     * @callback module:api/LDPApi~repositoryGroupIDHeadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the header values that would normally be found in the header of GET
     * @param {Number} groupID LDP Container to get
     * @param {module:api/LDPApi~repositoryGroupIDHeadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryGroupIDHead = function(groupID, callback) {
      var postBody = null;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling repositoryGroupIDHead");
      }


      var pathParams = {
        'groupID': groupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository/{groupID}', 'HEAD',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryGroupIDOptions operation.
     * @callback module:api/LDPApi~repositoryGroupIDOptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets options for HTTP methods to utilize for this container
     * @param {Number} groupID LDP Container to get
     * @param {module:api/LDPApi~repositoryGroupIDOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryGroupIDOptions = function(groupID, callback) {
      var postBody = null;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling repositoryGroupIDOptions");
      }


      var pathParams = {
        'groupID': groupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository/{groupID}', 'OPTIONS',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryGroupIDPatch operation.
     * @callback module:api/LDPApi~repositoryGroupIDPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates LDP container 
     * @param {Number} groupID LDP Container to get
     * @param {module:model/Resource} resource Resource to insert into container
     * @param {module:api/LDPApi~repositoryGroupIDPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryGroupIDPatch = function(groupID, resource, callback) {
      var postBody = resource;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling repositoryGroupIDPatch");
      }

      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling repositoryGroupIDPatch");
      }


      var pathParams = {
        'groupID': groupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository/{groupID}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryGroupIDPost operation.
     * @callback module:api/LDPApi~repositoryGroupIDPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Group.
     * Create a resource (defined via JSON-LD in payload) within a Group.
     * @param {String} groupID The group (ldp:Container) who is defining it&#39;s own resources or graph within Sinopia.
     * @param {module:model/Resource} resource Resource to insert into container
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug Suggested URI for resource
     * @param {String} opts.contentType Content-Type of resource
     * @param {module:api/LDPApi~repositoryGroupIDPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryGroupIDPost = function(groupID, resource, opts, callback) {
      opts = opts || {};
      var postBody = resource;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling repositoryGroupIDPost");
      }

      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling repositoryGroupIDPost");
      }


      var pathParams = {
        'groupID': groupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Slug': opts['slug'],
        'Content-Type': opts['contentType']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository/{groupID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryGroupIDPut operation.
     * @callback module:api/LDPApi~repositoryGroupIDPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the group description.
     * @param {Number} groupID LDP Container to get
     * @param {module:model/Resource} resource Resource to insert into container
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug Suggested URI for resource
     * @param {String} opts.contentType Content-Type of resource
     * @param {module:api/LDPApi~repositoryGroupIDPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryGroupIDPut = function(groupID, resource, opts, callback) {
      opts = opts || {};
      var postBody = resource;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling repositoryGroupIDPut");
      }

      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling repositoryGroupIDPut");
      }


      var pathParams = {
        'groupID': groupID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Slug': opts['slug'],
        'Content-Type': opts['contentType']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository/{groupID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryHead operation.
     * @callback module:api/LDPApi~repositoryHeadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get headers only of base container request.
     * Gets the header values that would normally be found in the header of GET on base container
     * @param {module:api/LDPApi~repositoryHeadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryHead = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository', 'HEAD',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryOptions operation.
     * @callback module:api/LDPApi~repositoryOptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets options for HTTP methods to utilize for the base container.
     * @param {module:api/LDPApi~repositoryOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryOptions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository', 'OPTIONS',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryPost operation.
     * @callback module:api/LDPApi~repositoryPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Group within the base container.
     * Create a new Group (defined via JSON-LD in payload) within the base container.
     * @param {module:model/Resource} groupMD Group metadata to insert into base container and describe the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug The group (ldp:Container) who is defining it&#39;s own entities or graph within Sinopia.
     * @param {String} opts.contentType Content-Type of resource, with preference for JSON-LD.
     * @param {module:api/LDPApi~repositoryPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryPost = function(groupMD, opts, callback) {
      opts = opts || {};
      var postBody = groupMD;

      // verify the required parameter 'groupMD' is set
      if (groupMD === undefined || groupMD === null) {
        throw new Error("Missing the required parameter 'groupMD' when calling repositoryPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Slug': opts['slug'],
        'Content-Type': opts['contentType']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoryPut operation.
     * @callback module:api/LDPApi~repositoryPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update metadata on base container.
     * Update metadata of base container with new metadata defined via JSON-LD in payload. Performs overwrite, not partial update.
     * @param {module:model/Resource} metadata New base container metadata to assert on the container.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType Content-Type of resource
     * @param {module:api/LDPApi~repositoryPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.repositoryPut = function(metadata, opts, callback) {
      opts = opts || {};
      var postBody = metadata;

      // verify the required parameter 'metadata' is set
      if (metadata === undefined || metadata === null) {
        throw new Error("Missing the required parameter 'metadata' when calling repositoryPut");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Type': opts['contentType']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json+ld'];
      var accepts = ['application/json+ld'];
      var returnType = null;

      return this.apiClient.callApi(
        '/repository', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
