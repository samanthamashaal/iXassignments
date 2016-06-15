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
  

//   $scope.addContact = function() {
//     // $scope.name = "";
//     $scope.newContact = $scope.name + $scope.number;
//     $scope.items.push($scope.newContact);
//     // console.log($scope.contact);
//     $scope.newContact = "";
//   }


//   if (!$scope.name || $scope.name === "") {
//             $scope.Validations.name = "Invalid Name Entry";
//             $scope.submitForm = false;
//         }



// $scope.isValidPhone = function (number) {
//     if (number) {
//     $scope.phoneTest = number.split("-");
//         if ($scope.phoneTest.length !== 3){
//             return false;
//         }
//         else if(($scope.phoneTest[0].length !==3) || ($scope.phoneTest[0] == NaN)) {
//             return false;
//         }
//         else if(($scope.phoneTest[1].length !==3) || ($scope.phoneTest[1] == NaN)) {
//             return false;
//         }
//         else if(($scope.phoneTest[2].length !==4) || ($scope.phoneTest[2] == NaN)) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     }               
// }

//  if ($scope.number === false || !$scope.isValidPhone($scope.number)) {
//             $scope.Validations.number = "Invalid Phone Number Entry";
//             $scope.submitForm = false;
//             console.log($scope.name);
//             console.log($scope.number);
//         }   

// });


