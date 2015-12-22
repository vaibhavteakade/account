app.config(function($stateProvider,$urlRouterProvider) {
	 $urlRouterProvider
    .otherwise('/auth');
	
	//state which will load login screen
	$stateProvider
	 .state('auth',{
		url:'/auth',
	 	templateUrl: "modules/auth/auth.html",
	 	controller:"authCtrl"
	 })
	 //state for home view
	 .state('home',{
		url:'/home',
	 	templateUrl: "modules/home.html",
	 })
	 
	 //state for home view
	 .state('home.dashboard',{
		url:'/dashboard',
	 	templateUrl: "modules/dashboard/dashboard.html",
	 })
});