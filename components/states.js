(function () {

	var app = angular.module('affiliates');

	app.component('states', {
		templateUrl: '/components/states.html',
		controller: stateController,
		controllerAs: 'sc'
	});

	stateController.$inject = ['$state', 'dataService'];

	function stateController($state, dataService) {

		var sc = this;

		// sc.topStates = dataService.getData().sort(function (a, b) {
		// 	return parseFloat(b.sales.replace('$', '')) - parseFloat(a.sales.replace('$', ''));
		// }).slice(0, 24);

		let stateTotals = {}
		dataService.getData().forEach(function (item) {
				if(stateTotals[item.state]) {
					stateTotals[item.state].sales += parseFloat(item.sales.replace('$', ''));
				} else {
					stateTotals[item.state] = {
						state: item.state,
						sales:parseFloat(item.sales.replace('$', ''))
					};
				}

		})
		sc.sortedTotals= (Object.values(stateTotals).sort((a,b)=>{return b.sales - a.sales}).slice(0,10))
		// stateTotals.values().sort().slice(0,9)



		// sc.showState = function (id) {
		// 	$state.go('profile', { affiliateId: id });
		// }
	}

})();