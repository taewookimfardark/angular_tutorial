var app = angular.module('tutorialApp',[]);

app.controller("LoginController",["$scope", "httpRequest", function($scope, httpRequest)
{
    $scope.userData = {"email": "", "password": ""};
    $scope.submit = function()
    {

        // $http({
        //     "method":"POST",
        //     "url":"https://id-scrap-scrap.appspot.com/api/auth/token",
        //     "headers":{"Content-Type":"application/json"},
        //     "data" : $scope.userData
        // service로 이동
        httpRequest.send('POST','auth/token',$scope.userDate)
            .then(
                function(response){
                    alert("success");
                    console.log(response);
                },
                function(response){
                    alert("fail");
                    console.log(response);
                });
    };
}]);