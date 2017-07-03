angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home.goal', {
          url: '/goal',
          views: {		
              '': {
                  templateUrl: 'Areas/Home/Goal/goal.html',
                  controller: 'goalController',
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/Home/Goal/goal.controller.js'
                              ]
                          });
                      }
                  }
              },
              'goal2017': {
                  templateUrl: 'Areas/Home/Goal/goal2017.html',
                  controller: 'goal2017Controller',
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/Home/Goal/goal2017.controller.js'
                              ]
                          });
                      }
                  }
              },
              'goal2018': {
                  templateUrl: 'Areas/Home/Goal/goal2018.html',		
                  controller: 'goal2018Controller',		
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/Home/Goal/goal2018.controller.js'
                              ]
                          });
                      }
                  }
              },
              'goal2019': {
                  templateUrl: 'Areas/Home/Goal/goal2019.html',
                  controller: 'goal2019Controller',
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/Home/Goal/goal2019.controller.js'
                              ]
                          });
                      }
                  }
              }
          }
      })
})