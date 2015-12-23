'use strict';

angular.module('todoApp')
    .controller('AboutEditCtrl', function ($scope, $state) {

        $scope.title = $scope.about.title;

        $scope.cancel = function() {
            $state.go('about.display');
        };

        $scope.edit = function() {
            $scope.about.title = $scope.title;
            $state.go('about.display');
        };
    });
