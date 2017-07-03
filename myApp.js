var myApp = angular.module('myApp', ["ui.router", "oc.lazyLoad"])
myApp.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    myApp.stateProvider = $stateProvider;

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('aboutUs', {
          url: '/aboutus',
          views: {
              '': {
                  templateUrl: 'Areas/aboutus/aboutus.html',
                  controller: 'aboutUsController',
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/AboutUs/aboutus.controller.js',
                                  'Areas/AboutUs/aboutus.service.js'
                              ]
                          });
                      }
                  }
              }
          }
      })
      .state('contactUs', {
          url: '/contactus',
          views: {
              '': {
                  templateUrl: 'Areas/contactus/contactus.html',
                  controller: 'contactUsController',
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/ContactUs/contactus.controller.js'
                              ]
                          });
                      }
                  }
              }
          }
      })
      .state('home', {
          url: '/home',
          views: {
              '': {
                  templateUrl: 'Areas/home/home.html',
                  controller: 'homeController',
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/Home/home.controller.js',
                                  'Areas/Home/Goal/goal.route.js'
                              ]
                          });
                      }
                  }
              }
          }
      })
      .state('home.company', {
          url: '/company',
          views: {
              '': {
                  templateUrl: 'Areas/home/company/company.html',
                  controller: 'companyController',
                  resolve: {
                      loadfunction: function ($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              files: [
                                  'Areas/Home/Company/company.controller.js'
                              ]
                          });
                      }
                  }
              }
          }
      })
})