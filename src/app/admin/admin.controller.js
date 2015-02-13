'use strict';

angular.module('mmLandingPages')
  .controller('AdminCtrl', function ($scope , $firebase) {
    var baseinterest = 'interest';
    var urlinterest = 'https://resplendent-fire-5403.firebaseio.com/' + baseinterest + '/usersinterested';
    var refinterest = new Firebase(urlinterest);

    var baseregister = 'interest';
    var urlregister = 'https://resplendent-fire-5403.firebaseio.com/' + baseregister + '/usersinterested';
    var refregister = new Firebase(urlregister);

    $scope.usersonInterest = $firebase(refinterest).$asArray();
    $scope.usersonRegister = $firebase(refregister).$asArray();

    var baseinterestNot = 'interest';
    var urlinterestNot = 'https://resplendent-fire-5403.firebaseio.com/' + baseinterestNot + '/usersnotinterested';
    var refinterestNot = new Firebase(urlinterestNot);

    var baseregisterNot = 'register';
    var urlregisterNot = 'https://resplendent-fire-5403.firebaseio.com/' + baseregisterNot + '/usersnotinterested';
    var refregisterNot = new Firebase(urlregisterNot);

    $scope.usersonInterestNot = $firebase(refinterestNot).$asArray();
    $scope.usersonRegisterNot = $firebase(refregisterNot).$asArray();
    $scope.UsersNetNot = {};

    $scope.usersonInterestNot.$loaded().then(function(UsersNetNot) {
       $scope.UsersNetNot.interest = $scope.usersonInterestNot.length;
    });
    $scope.usersonRegisterNot.$loaded().then(function(UsersNetNot) {
       $scope.UsersNetNot.register = $scope.usersonRegisterNot.length;
    });

    var baseinterestContact = 'interest';
    var urlinterestContact = 'https://resplendent-fire-5403.firebaseio.com/' + baseinterestContact + '/correspondence';
    var refinterestContact = new Firebase(urlinterestContact);

    $scope.usersonInterestContact = $firebase(refinterestContact).$asArray();

    var baseregisterContact = 'register';
    var urlregisterContact = 'https://resplendent-fire-5403.firebaseio.com/' + baseregisterContact + '/correspondence';
    var refregisterContact = new Firebase(urlregisterContact);

    $scope.usersonInterestContact = $firebase(refinterestContact).$asArray();
    $scope.usersonRegisterContact = $firebase(refregisterContact).$asArray();

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
    });
    $scope.usersonRegister.$loaded().then(function(usersonRegister) {
       $scope.UsersNet.register = $scope.usersonRegister.length;
    });

  });
