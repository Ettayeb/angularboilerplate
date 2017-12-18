angular.module("routes", [])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                requireUserLogin: false,
                title: 'Accueil'
            })
            .otherwise('/')
        $locationProvider.html5Mode(true)
    }])
