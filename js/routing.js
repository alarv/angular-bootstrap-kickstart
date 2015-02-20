angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise("/");

	// Now set up the states
	$stateProvider.state('home', {
		url: "/",
		templateUrl: "templates/home.html",
	}).state('state1', {
		url: "/state1",
		templateUrl: "templates/state1.html",
	}).state('state2', {
		url: "/state2",
		templateUrl: "templates/state2.html",
	});
}]);