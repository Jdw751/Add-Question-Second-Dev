var app = angular.module("putInQuestion",['ui.router','multipleSelectApp','multipleChoiceApp']);

var select = angular.module('multipleSelectApp',[]);
var choice = angular.module('multipleChoiceApp',[]);

app.controller('QuestionCtrl', function($scope,$location,$state) {
	$scope.format = '';

	$scope.go = function go(page){
		
		$state.go(page);

		console.log($scope.format);
		console.log(page);
	};

	//console.log($scope.format);
  
});


app.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('');
	
	$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'index.html'
		})

		.state('multipleChoice', {
			url: '/multipleChoice',
			templateUrl: 'MultipleChoiceView.htm'

		})
		.state('multipleSelect', {
			url: '/multipleSelect',
			templateUrl: 'MultipleSelectView.htm'

		});

});


