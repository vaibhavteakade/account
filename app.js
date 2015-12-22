angular.module('account.auth', []);

var app =  angular.module('account', [
                                         'ui.router',
                                         'ngCookies',
	                                     'smart-table',
										 'account.auth'
                                       ]);
