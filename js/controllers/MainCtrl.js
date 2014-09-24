personal.controller('MainController', function($scope, $location) {
    $scope.place = function(url) {
        $location.path("/" + url);
    }
    $scope.pageClass = 'page-home';
});