(function () {

	var app = angular.module('affiliates', ['ui.router']);
	
	app.config(AppConfiguration);

	AppConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function AppConfiguration($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/dashboard');

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				component: 'dashboard'
			})
			.state('list', {
				url: '/list',
				component: 'affiliateList'
			})
			.state('profile', {
				url: '/profile/:affiliateId',
				component: 'profile'
			})
			.state('applications', {
				url: '/applications',
				component: 'applications'
			})
			.state('states',{
				url:'/states',
				component: 'states'
			})
			.state('search', {
				url: '/search/:query',
				component: 'search'
			});
	}

	app.controller('appController', appController);

	appController.$inject = ['$state', 'dataService'];

	function appController($state, dataService) {

		var ac = this;
		
		ac.query = '';
		
		ac.search = function() {

			if (ac.query) {
				$state.go('search', { query: ac.query });
			}			
		}
	}
})();