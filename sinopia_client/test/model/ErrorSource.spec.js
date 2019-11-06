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
    describe('ErrorSource', function() {
      beforeEach(function() {
        instance = new SinopiaServer.ErrorSource();
      });

      it('should create an instance of ErrorSource', function() {
        // TODO: update the code to test ErrorSource
        expect(instance).to.be.a(SinopiaServer.ErrorSource);
      });

      it('should have the property pointer (base name: "pointer")', function() {
        // TODO: update the code to test the property pointer
        expect(instance).to.have.property('pointer');
        // expect(instance.pointer).to.be(expectedValueLiteral);
      });

    });
  });

}));
