
var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/formroute.html"
  })
  $routeProvider.when("/contactroute", {
    templateUrl: "templates/contactroute.html"
  })
});


// FORM VALIDATION JS
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




// CONTACTBOOK JS
var app = angular.module("ContactBook", []); // Do not forget the empty array.

app.controller("MainCtrl", function($scope) {
  $scope.allContacts = [];
  $scope.addContact = function () {
    $scope.contacts = [];
    $scope.count = 0;

    $scope.validations = [];

        //name test
        if($scope.name){
            $scope.count = $scope.count + 1;
            $scope.thanks = "Successfully added " + $scope.name + " to the contact book";
            $scope.contacts.push($scope.name);
            $scope.name = "";

        }
        else{
            $scope.validations.push("Please submit a name");
        }

        //phone test
        if(!$scope.number){
            $scope.validations.push("Phone Number must be XXX-XXX-XXXX");
        }
        else{
            $scope.phoneTest = $scope.number.split('-'); 

            if($scope.phoneTest.length !== 3 ) {
                $scope.validations.push("Phone Number must be XXX-XXX-XXXX");  
            }

            else if(($scope.phoneTest[0].length !== 3)||($scope.phoneTest[0] === NaN)) {
                $scope.validations.push("Phone Number must be XXX-XXX-XXXX");  
            }

            else if(($scope.phoneTest[1].length !== 3)||($scope.phoneTest[1] === NaN)) {
                $scope.validations.push("Phone Number must be XXX-XXX-XXXX");  
            }

            else if(($scope.phoneTest[2].length !== 4)||($scope.phoneTest[2] === NaN)) {
                $scope.validations.push("Phone Number must be XXX-XXX-XXXX");  
            }

            else {
                $scope.count = $scope.count + 1;
                $scope.contacts.push($scope.number);
                $scope.number = "";
            }
        }
        if($scope.count == 2) {
        $scope.oneline = $scope.contacts.join(" ");
        $scope.allContacts.push($scope.oneline);
        $scope.oneline = "";
        } 
    } 

});