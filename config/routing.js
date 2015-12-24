app.config(function($stateProvider,$urlRouterProvider) {
	 $urlRouterProvider
    .otherwise('/home/dashboard');
	
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

	 .state('home.customerinvoice',{
		url:'/customerinvoice',
	 	templateUrl: "modules/customer_invoice/customerinvoice.html",
	 })

	 .state('home.customerinvoicenew',{
		url:'/customerinvoicenew',
	 	templateUrl: "modules/customer_invoice/customerinvoicenew.html",
	 })

	 .state('home.venderbills',{
		url:'/venderbills',
	 	templateUrl: "modules/venderbills/venderbills.html",
	 })

	 .state('home.venderbillnew',{
		url:'/venderbillnew',
	 	templateUrl: "modules/venderbills/venderbillnew.html",
	 })

	 .state('home.cashregister',{
		url:'/cashregister',
	 	templateUrl: "modules/cash/cashregister.html",
	 })

	 .state('home.cashentry',{
		url:'/cashentry',
	 	templateUrl: "modules/cash/newentry.html",
	 })

	  .state('home.customers',{
		url:'/customers',
	 	templateUrl: "modules/customer/customers.html",
	 })

	   .state('home.customernew',{
		url:'/customernew',
	 	templateUrl: "modules/customer/customernew.html",
	 })

	     .state('home.venders',{
		url:'/venders',
	 	templateUrl: "modules/vender/venders.html",
	 })

	   .state('home.vendernew',{
		url:'/vendernew',
	 	templateUrl: "modules/vender/vendernew.html",
	 })

	       .state('home.products',{
		url:'/products',
	 	templateUrl: "modules/product/products.html",
	 })

	  
	       .state('home.productnew',{
		url:'/productnew',
	 	templateUrl: "modules/product/productnew.html",
	 })

	   .state('home.productnew.general',{
		url:'/general',
	 	templateUrl: "modules/product/general.html",
	 })

	   .state('home.productnew.account',{
		url:'/account',
	 	templateUrl: "modules/product/account.html",
	 })
	   .state('home.productnew.sales',{
		url:'/sales',
	 	templateUrl: "modules/product/sales.html",
	 })

	   .state('home.productnew.inventory',{
		url:'/inventory',
	 	templateUrl: "modules/product/inventory.html",
	 })
});