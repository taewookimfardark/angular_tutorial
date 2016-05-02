var App = angular.module('routingDemoApp',['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/business")

    $stateProvider
        .state('business', {//State demonstrating Nested views
            url: "/business",
            templateUrl: "business.html"
        })
        .state('business.products', {//nested state [products is the nested state of business state]
            url: "/products",
            templateUrl: "products.html",
            controller: function($scope){
                $scope.products = ["Computer", "Printers", "Phones", "Bags"];
            }
        })
        .state('business.services', {//nested state [services is the nested state of business state]
            url: "/services",
            templateUrl: "services.html",
            controller: function($scope){
                $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
            }
        })

        .state('portfolio', {//State demonstrating Multiple,named views
            url: "/portfolio",
            views: {
                ""  :    { templateUrl: "portfolio.html" },
                "view1@portfolio": { template: "Yonsei" },
                "view2@portfolio": { templateUrl: "clients.html" ,
                    controller: function($scope){
                        $scope.clients = ["HP", "IBM", "MicroSoft"];
                    }
                }
            }
        })
}]);