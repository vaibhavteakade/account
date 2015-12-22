//related code for authentication handling
'use strict';

angular.module('account.auth')

.controller('authCtrl', authCtrl);

// Inject my dependencies
authCtrl.$inject = [ '$scope','$location', '$rootScope',
		'$http','$cookieStore' ];

// Now create our controller function with all necessary logic
function authCtrl($scope, $location, $rootScope, $http,$cookieStore) {
	
}