var app = angular.module("putInQuestion");

app.factory('questionFactory',function($http){

	var factory = {};

	factory.getCategories = function(){//incomplete should pull list from db

		return ["Java", "C#",".Net","Python", "C++"];
	};

	factory.getTags = function(){//incomplete should pull list from db
		return ["OOP","Servlets","Web Services","MVC","Other"];
	};



	return factory;

});