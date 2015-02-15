'use strict';

angular.module('mmLandingPages')
  .controller('AdminCtrl', function ($scope , $firebase, usersFactory) {
    $scope.tab;
    $scope.usersonInterest = usersFactory.getInterestedUserBySubdomain('interest').$asArray();
    $scope.usersonRegister = usersFactory.getInterestedUserBySubdomain('register').$asArray();

    $scope.usersonInterestNot = usersFactory.getNotInterestedUserBySubdomain('interest').$asArray();
    $scope.usersonRegisterNot = usersFactory.getNotInterestedUserBySubdomain('register').$asArray();

    $scope.usersonInterestContact = usersFactory.getQueriesUserBySubdomain('interest').$asArray();
    $scope.usersonRegisterContact = usersFactory.getQueriesUserBySubdomain('register').$asArray();

    $scope.UsersNetNot = {};

    $scope.usersonInterestNot.$loaded().then(function(UsersNetNot) {
       $scope.UsersNetNot.interest = $scope.usersonInterestNot.length;

    });
    $scope.usersonRegisterNot.$loaded().then(function(UsersNetNot) {
       $scope.UsersNetNot.register = $scope.usersonRegisterNot.length;
       console.log($scope.usersonRegisterNot);
    });

    $scope.UsersNetContact = {};

    $scope.usersonInterestContact.$loaded().then(function(UsersNetContact) {
       $scope.UsersNetContact.interest = $scope.usersonInterestContact.length;
    });
    $scope.usersonRegisterContact.$loaded().then(function(UsersNetContact) {
       $scope.UsersNetContact.register = $scope.usersonRegisterContact.length;
    });

    $scope.UsersNet = {};
    $scope.usersonInterest.$loaded().then(function(usersonInterest) {
       $scope.UsersNet.interest = $scope.usersonInterest.length;
       console.log($scope.usersonInterest);
    });
    $scope.usersonRegister.$loaded().then(function(usersonRegister) {
       $scope.UsersNet.register = $scope.usersonRegister.length;
    });

    $scope.pageTodisplay = 10;
    $scope.currentPage = 1;
    $scope.filteredTodos = []


  });
