angular.module('configs', [])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false)
        $compileProvider.commentDirectivesEnabled(false)
        $compileProvider.cssClassDirectivesEnabled(false)
}])

/*
    .run(['$rootScope', '$location', '$route', 'user', function ($rootScope, $location, $route, user) {

        $rootScope.$on("$locationChangeStart", function (event, next, current) {

            if ($route.routes[$location.path()] && $route.routes[$location.path()].requireUserLogin && !user.isLoggedIn()) {
                event.preventDefault()
                $location.path('/login')
            }
            if ($location.path().indexOf('user') != -1 && !user.isLoggedIn()) {
                event.preventDefault()
                $location.path('/login')

            }
        })

        $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
            //Change page title, based on Route information
            if ($route.current)
                $rootScope.title = 'Kitokomarket | ' + $route.current.title
        })
    }])
*/
