'use strict';

angular.module('todoApp')
    .controller('AboutDisplayCtrl', function ($scope, $state) {

        $scope.edit = function() {
            $state.go('about.edit');
        };
    });
