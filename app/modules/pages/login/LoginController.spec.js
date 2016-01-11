/*jshint expr: true*/

'use strict';

describe('LoginController', function() {

    var ctrl, scope;

    beforeEach(angular.mock.module('Vizob.crm'));

    beforeEach(function() {

        angular.mock.inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('LoginCtrl', {
                $scope: scope
            });
        });

    });

    it('should exist', function() {
        expect(ctrl).to.not.be.undefined;
    });

});