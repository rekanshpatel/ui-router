angular.module('myApp').controller('dynamic1Controller', function ($scope, dynamic1Service) {
    $scope.page_html = dynamic1Service.getHTML();
});
