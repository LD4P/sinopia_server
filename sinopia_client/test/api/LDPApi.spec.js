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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SinopiaServer);
  }
}(this, function(expect, SinopiaServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SinopiaServer.LDPApi();
    // same idea as https://stackoverflow.com/a/36041786
    instance.apiClient.basePath = 'http://localhost:8080';
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LDPApi', function() {
    describe('getBase', function() {
      // it('should call getBase successfully', function() {
      //   return instance.getBase()
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('repositoryGroupIDDelete', function() {
      it('should call repositoryGroupIDDelete successfully', function(done) {
        //uncomment below and update the code to test repositoryGroupIDDelete
        //instance.repositoryGroupIDDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoryGroupIDHead', function() {
      // it('should call repositoryGroupIDHead successfully', function() {
      //   return instance.repositoryGroupIDHead('pcc')
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('repositoryGroupIDOptions', function() {
      // it('should call repositoryGroupIDOptions successfully', function() {
      //   return instance.repositoryGroupIDOptions('pcc')
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('repositoryGroupIDPatch', function() {
      it('should call repositoryGroupIDPatch successfully', function(done) {
        //uncomment below and update the code to test repositoryGroupIDPatch
        //instance.repositoryGroupIDPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoryGroupIDPost', function() {
      it('should call repositoryGroupIDPost successfully', function(done) {
        //uncomment below and update the code to test repositoryGroupIDPost
        //instance.repositoryGroupIDPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoryGroupIDPut', function() {
      it('should call repositoryGroupIDPut successfully', function(done) {
        //uncomment below and update the code to test repositoryGroupIDPut
        //instance.repositoryGroupIDPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoryHead', function() {
      // it('should call repositoryHead successfully', function() {
      //   return instance.repositoryHead()
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('repositoryOptions', function() {
      // it('should call repositoryOptions successfully', function() {
      //   return instance.repositoryOptions()
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('repositoryPost', function() {
      it('should call repositoryPost successfully', function(done) {
        //uncomment below and update the code to test repositoryPost
        //instance.repositoryPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoryPut', function() {
      it('should call repositoryPut successfully', function(done) {
        //uncomment below and update the code to test repositoryPut
        //instance.repositoryPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
