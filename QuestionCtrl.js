var app = angular.module("putInQuestion");

function QuestionCtrl($scope){


		$scope.question = {};		//question json
		$scope.format = '';			// format of question
		$scope.categoryList = []; 	//list of categories
		$scope.tagList = []; 		//list of tags
		$scope.optionList = []; 	//list of options for question
		$scope.answerList = [];		//list of answer for question


		$scope.addCategory = function(){

			if($scope.categoryList !=null && $scope.categoryList !=''){
                $scope.question.push({categories:$scope.categoryList});
                
            }


		}
}