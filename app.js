var app = angular.module("putInQuestion",['ui.router','multipleSelectApp','multipleChoiceApp']);

var select = angular.module('multipleSelectApp',[]);
var choice = angular.module('multipleChoiceApp',[]);

app.controller('QuestionCtrl', function($scope,$location,$state) {

	$scope.format = '';
	$scope.questionText = '';	//text of question
	$scope.question = {};		//question json
	$scope.categoryList = []; 	//list of categories
	$scope.tagList = []; 		//list of tags
	$scope.optionList = []; 	//list of options for question
	$scope.answerList = [];		//list of answer for question

	$scope.go = function go(page){
		
		$state.go(page);

		console.log($scope.format);
		console.log(page);
	};
	


	$scope.addCategory = function(){

		if($scope.category !=null && $scope.category !='')
			if(!$scope.categoryList.includes($scope.category))

		{
            $scope.categoryList.push($scope.category);
            $scope.category = '';
            
        }
        console.log(!$scope.categoryList.includes($scope.category));
        
        console.log($scope.categoryList);


	};

	$scope.addTag = function(){

		if($scope.tag !=null && $scope.tag !='')
			if(!$scope.tagList.includes($scope.tag))

		{
            $scope.tagList.push($scope.tag);
            $scope.tag = '';
            
        }
        
       	console.log(!$scope.tagList.includes($scope.tag));
        console.log($scope.tagList);


	};

	$scope.removeCategory = function(index)
        {

            $scope.categoryList.splice(index,1);

        	
    };

    $scope.removeTag = function(index)
        {

            $scope.tagList.splice(index,1);

        	
    };

	//console.log($scope.format);
  
});


app.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('');
	
	$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'index.html',
			controller: 'QuestionCtrl'
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


