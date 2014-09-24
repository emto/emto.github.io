personal.controller('AboutController', function($scope, $location) {
    $scope.pageClass = 'page-about';

    $scope.place = function(url) {
        $location.path("/" + url);
    }

});