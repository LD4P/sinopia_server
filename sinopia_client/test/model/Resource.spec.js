/*
 * Sinopia Server
 * Sinopia Server. Supports CRUD, following loosely LDP, on Sinopia resources. Top level requires special authorization for creating a group's graph (i.e. PCC, Stanford, etc.).
 *
 * OpenAPI spec version: 3.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
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

  describe('(package)', function() {
    describe('Resource', function() {
      beforeEach(function() {
        instance = new SinopiaServer.Resource();
      });

      it('should create an instance of Resource', function() {
        // TODO: update the code to test Resource
        expect(instance).to.be.a(SinopiaServer.Resource);
      });

      it('should have the property graph (base name: "@graph")', function() {
        // TODO: update the code to test the property graph
        expect(instance).to.have.property('graph');
        // expect(instance.graph).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "@id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property context (base name: "@context")', function() {
        // TODO: update the code to test the property context
        expect(instance).to.have.property('context');
        // expect(instance.context).to.be(expectedValueLiteral);
      });

    });
  });

}));
