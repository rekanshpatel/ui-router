angular.module('myApp').controller('dynamic2Controller', function ($scope, dynamic2Service) {
    $scope.page_html = dynamic2Service.getHTML();
});
