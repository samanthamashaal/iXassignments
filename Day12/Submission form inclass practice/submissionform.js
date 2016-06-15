var app = angular.module("FormApp", []);

app.controller("FormCtrl", function($scope){

	// $scope.newItem = " ";
	// $scope.items=[ ];

	// $scope.addItem = function (){
	// 	$scope.items.push($scope.newItem);
	// 	$scope.newItem = " ";
	// }
	$scope.checkInputs = function () {
		$scope.input1 = "";
		$scope.input2 = "";
		if ($scope.input1 !== " " && $scope.input2 !== " "){
			console.log("ok");
		} else {
			console.log("not ok");
		}
	}
});
