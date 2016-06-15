var app = angular.module("FormApp", []);


app.controller("FormCtrl", function($scope){

	$scope.checkInputs = function () {
		$scope.Validations={ };
		$scope.submitForm = true;


		if (!$scope.name || $scope.name === "") {
			$scope.Validations.name = "Invalid Name Entry";
			$scope.submitForm = false;
		}

		if ($scope.number === false || !isValidPhone($scope.number)) {
			$scope.Validations.number = "Invalid Phone Number Entry";
			$scope.submitForm = false;
		}

		if ($scope.email === false || !isValidEmail($scope.email)) {
			$scope.Validations.email = "Invalid Email Entry";
			$scope.submitForm = false;
		}
		
		if ($scope.password === false || !isValidPassword($scope.password)){
			console.log("our submitForm is false");
			$scope.Validations.password = "Invalid Password Entry";
			$scope.submitForm = false;
		}
		
		if ($scope.passcheck === false || $scope.passcheck !== $scope.password){
			$scope.Validations.passcheck = "Verify that your passwords match";
			$scope.submitForm = false;
		}
	}

var isValidPhone = function (number) {
	if (number) {
	var phoneTest = number.split("-");
		if (phoneTest.length !== 3){
			return false;
		}
		else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
			return false;
		}
		else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
			return false;
		}
		else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
			return false;
		}
		else {
			return true;
		}
	}				
}

var isValidEmail = function (email) {
	if (email) {
	var emailTest = email.split("@");
		if (emailTest.length !==2) {
    		return false;
  		}
  		else {
    		var emailTest2=email.split('.');
    		if (emailTest2.length !==2) {
      			return false;
    		}
    		else {
      			return true;
      		}
    	}
  	}
}
	

var isValidPassword = function (pass) {
	return (pass.length >= 6);
}

});


