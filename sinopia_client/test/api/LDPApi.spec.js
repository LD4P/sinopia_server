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

  const chai = require('chai')
  expect = chai.expect // no 'var', expect is already a param

  describe('LDPApi', function() {
    describe('createGroup', function() {
      it('should call createGroup successfully', function() {
        // created manually for now, but will need to do this as setup here (and teardown later?) to make stuff created under /repository not 404
        // instance.updateBase(new SinopiaServer.Resource( , , new SinopiaServer.ResourceContext));
        // var resources = [new SinopiaServer.Resource()];
        // var group = new SinopiaServer.LDPContainer('', 'PCC Group', null, resources);
        // return instance.createGroup('pcc', group, { contentType: 'application/ld+json' })
        //   .then(function(_data) {
        //     expect().to.be();
        //   });
      });
    });
    describe('createResource', function() {
      it('should call createResource successfully', function(done) {
        //uncomment below and update the code to test createResource
        //instance.createResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUser', function() {
      it('should call createUser successfully', function(done) {
        //uncomment below and update the code to test createUser
        //instance.createUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteResource', function() {
      it('should call deleteResource successfully', function(done) {
        //uncomment below and update the code to test deleteResource
        //instance.deleteResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBase', function() {
      // it('should call getBase successfully', function() {
      //   return instance.getBase()
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('getGroup', function() {
      it('should call getGroup successfully', function(done) {
        //uncomment below and update the code to test getGroup
        //instance.getGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getResource', function() {
      it('should call getResource successfully', function(done) {
        //uncomment below and update the code to test getResource
        //instance.getResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        //uncomment below and update the code to test getUser
        //instance.getUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsers', function() {
      it('should call getUsers successfully', function(done) {
        //uncomment below and update the code to test getUsers
        //instance.getUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('headBase', function() {
      // it('should call headBase successfully', function() {
      //   return instance.headBase()
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('headGroup', function() {
      // it('should call headGroup successfully', function() {
      //   return instance.headGroup('pcc')
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('headResource', function() {
      it('should call headResource successfully', function(done) {
        //uncomment below and update the code to test headResource
        //instance.headResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('headUser', function() {
      it('should call headUser successfully', function(done) {
        //uncomment below and update the code to test headUser
        //instance.headUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('headUsers', function() {
      it('should call headUsers successfully', function(done) {
        //uncomment below and update the code to test headUsers
        //instance.headUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('optionsBase', function() {
      // it('should call optionsBase successfully', function() {
      //   return instance.optionsBase()
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('optionsGroup', function() {
      // it('should call optionsGroup successfully', function() {
      //   return instance.optionsGroup('pcc')
      //     .then(function(_data) {
      //       expect().to.be();
      //     });
      // });
    });
    describe('optionsResource', function() {
      it('should call optionsResource successfully', function(done) {
        //uncomment below and update the code to test optionsResource
        //instance.optionsResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('optionsUser', function() {
      it('should call optionsUser successfully', function(done) {
        //uncomment below and update the code to test optionsUser
        //instance.optionsUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('optionsUsers', function() {
      it('should call optionsUsers successfully', function(done) {
        //uncomment below and update the code to test optionsUsers
        //instance.optionsUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBase', function() {
      it('should call updateBase successfully', function() {
        var rsrcCtx = new SinopiaServer.SinopiaBaseResourceContext('http://www.w3.org/2000/01/rdf-schema#', 'http://www.w3.org/ns/ldp#')
        var baseRsrc = new SinopiaServer.SinopiaBaseContainer('', rsrcCtx, ['ldp:Container', 'ldp:BasicContainer'], 'Sinopia LDP Server')

        return instance.updateBase(baseRsrc).then(function(_responseData) {
          return instance.getBase()
            .then(function(responseData) {
              expect(responseData['@id']).to.equal('http://localhost:8080/repository')
              expect(responseData['@context']).to.deep.equal(baseRsrc['@context'])
              // expect(responseData['@type']).to.deep.equal(baseRsrc['@type']) //TODO: why no type coming back?
              expect(responseData['label']).to.equal(baseRsrc['rdfs:label'])
            })
        })



      });
    });
    describe('updateGroup', function() {
      it('should call updateGroup successfully', function(done) {
        //uncomment below and update the code to test updateGroup
        //instance.updateGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateResource', function() {
      it('should call updateResource successfully', function(done) {
        //uncomment below and update the code to test updateResource
        //instance.updateResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUsers', function() {
      it('should call updateUsers successfully', function(done) {
        //uncomment below and update the code to test updateUsers
        //instance.updateUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
