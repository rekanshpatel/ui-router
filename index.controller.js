myApp.controller('indexController', function ($scope, $rootScope, $state) {
    $scope.page_html = 'Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....Index page containts....';

    $scope.load = function (pageName) {
        alert('jo');
        var currentState = $rootScope.$state.current;
        var stateForLob = $state.get(pageName.toLowerCase());
        if (stateForLob != currentState) {
            $state.go(pageName.toLowerCase());
        }
        else {
            $state.go('home');
        }
    };
});
