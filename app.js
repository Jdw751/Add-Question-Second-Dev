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

	$scope.go = function go(page){//change page based off of format dropdown

		console.log(page);

		if(page =='')// if no format is chosen then clears the question
		{
			
			$state.go('home');
			console.log(page);
			
		
			
		}
		else{

			$state.go(page);

			console.log($scope.format);
			console.log(page);
		}
		
		
	};
	


	$scope.addCategory = function(){//add categories to question

		if($scope.category !=null && $scope.category !='')
			if(!$scope.categoryList.includes($scope.category))//checks for duplicates

		{
            $scope.categoryList.push($scope.category);
            $scope.category = '';
            
        }
        console.log(!$scope.categoryList.includes($scope.category));
        
        console.log($scope.categoryList);


	};

	$scope.addTag = function(){//add tags to question

		if($scope.tag !=null && $scope.tag !='')
			if(!$scope.tagList.includes($scope.tag))//checks for duplicates

		{
            $scope.tagList.push($scope.tag);
            $scope.tag = '';
            
        }
        
       	console.log(!$scope.tagList.includes($scope.tag));
        console.log($scope.tagList);


	};

	$scope.addOption = function(){//add tags to question

		if($scope.option !=null && $scope.option !='')
			if(!$scope.optionList.includes($scope.option))//checks for duplicates

		{
            $scope.optionList.push($scope.option);
            $scope.option = '';
            
        }
        
       	console.log(!$scope.optionList.includes($scope.option));
        console.log($scope.optionList);


	};

	$scope.removeCategory = function(index)//removes category from question
        {

            $scope.categoryList.splice(index,1);

        	
    };

    $scope.removeTag = function(index)//removes tag from question
        {

            $scope.tagList.splice(index,1);

        	
    };

    $scope.removeOption = function(index)//removes category from question
        {

            $scope.optionList.splice(index,1);

        	
    };

    $scope.clearQuestion = function()//removes category from question
        {

           	$scope.format = '';
			$scope.questionText = '';	//text of question
			$scope.question = {};		//question json
			$scope.categoryList = []; 	//list of categories
			$scope.tagList = []; 		//list of tags
			$scope.optionList = []; 	//list of options for question
			$scope.answerList = [];		//list of answer for question

			//clear out page selections
			$scope.option = '';
			$scope.tag = '';
			$scope.category = '';
			$scope.go('');
			



        	
    };

	//console.log($scope.format);
  
});


app.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('');
	
	$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'noSelectOptionView.htm',
			controller: 'QuestionCtrl'
		})

		.state('multipleChoice', {
			url: '/multipleChoice',
			templateUrl: 'MultipleChoiceView.htm'
			// controller: 'QuestionCtrl'

		})
		.state('multipleSelect', {
			url: '/multipleSelect',
			templateUrl: 'MultipleSelectView.htm',
			controller: 'QuestionCtrl'

		});

});


