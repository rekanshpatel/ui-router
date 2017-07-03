angular.module('myApp').controller('dynamic3Controller', function ($scope, dynamic3Service) {
    $scope.page_html = dynamic3Service.getHTML();
});
