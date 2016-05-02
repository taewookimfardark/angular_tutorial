app.service('httpRequest',['$http', function($http)
{   
    this.send = function(method, url, data)
    {   
        // method validatation
        
        //url, /users/, users, check
        
        return $http({
            "method": method,
            "url":"https://id-scrap-scrap.appspot.com/api/"+url,
            "headers":{"Content-Type":"application/json"},
            "data" : data
        });  // promise 개념임 찾아보자
    };
}]);