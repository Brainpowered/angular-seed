angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {

    $scope.signupEmail = function(){

      var ref = new Firebase("https://angular-seed-bootstrap.firebaseio.com");

      ref.createUser({
        email    : $scope.data.email,
        password : $scope.data.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });

    };

    $scope.loginEmail = function(){

      var ref = new Firebase("https://angular-seed-bootstrap.firebaseio.com");

      ref.authWithPassword({
        email    : $scope.data.email,
        password : $scope.data.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });

    };

    $scope.loginFacebook = function(){

        var ref = new Firebase("https://angular-seed-bootstrap.firebaseio.com");

        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        });

    };

});
