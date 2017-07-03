myApp.service('indexService', function ($cacheFactory, $http) {
    this.addStatesFromEntitlements = function (entitlements) {
        entitlements.forEach(function (ent) {
            if (ent.entitled) {
                myApp.stateProvider.state(ent.pageName.toLowerCase(),
                {
                    url: '/' + ent.pageName.toLowerCase(),
                    controller: ent.pageName.toLowerCase() + 'Controller',
                    templateUrl: 'Areas/Dynamic/' + ent.pageName.toLowerCase() + '.html'
                });
            }
        });
    };
});
