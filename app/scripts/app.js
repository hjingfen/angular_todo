'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
    .module('todoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "../views/main.html",
                controller: 'MainCtrl'
            })
            .state('about', {
                url: "/about",
                templateUrl: "../views/about.html",
                controller: 'AboutCtrl'
            })
            .state('about.display', {
                url: "/display",
                templateUrl: "../views/partials/display_about.html",
                controller: 'AboutDisplayCtrl'
            })
            .state('about.edit', {
                url: "/edit",
                templateUrl: "../views/partials/edit_about.html",
                controller: 'AboutEditCtrl'
            })
            .state('task', {
                url: "/task",
                templateUrl: "../views/task.html",
                controller: 'TaskCtrl'
            });

//            .when('/', {
//                templateUrl: 'views/main.html',
//                controller: 'MainCtrl'
//            })
//            .when('/about', {
//                templateUrl: 'views/about.html',
//                controller: 'AboutCtrl'
//            })
//            .when('/task', {
//                templateUrl: 'views/task.html',
//                controller: 'TaskCtrl'
//            })
//            .otherwise({
//                redirectTo: '/'
//            });
    });
