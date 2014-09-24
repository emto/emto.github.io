var personal = angular.module('personal', ['ngRoute', 'ngTouch', 'ngAnimate']);

personal.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })

        .otherwise({
            templateUrl: 'views/home.html',
            controller: 'MainController'
        });
}]);