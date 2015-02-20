/**
 * Contains functions that are added to the root AngularJs scope.
 */
angular.module('loginApp').run(function($rootScope, $state) {
	/* To show current active state on menu */
	$rootScope.getClass = function(path) {
		if ($state.current.name == path) {
			return "active";
		} else {
			return "";
		}
	}

});