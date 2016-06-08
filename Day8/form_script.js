
$(document).ready(function() {
   $("#submit-btn").click(function(){ 
      phoneValidator($("#phone").val());
    emailValidator($("#email").val());
  });
}); 


function phoneValidator(phoneNum) {  
  var phoneTest=phoneNum.split('-');
  if(phoneTest.length !==3) {
    $("#test1").text("invalid number");
  }
  else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
    $("#test1").text("invalid number");
  }
  else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
    $("#test1").text("invalid number");
  }
  else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
    $("#test1").text("invalid number");
  }
  else {
    $("#test1").text("valid number");
  }
}


function emailValidator(email) {
  var emailTest=email.split('@');
  if(emailTest.length !==2) {
    $("#test2").text("invalid email");
  }
  else {
    var emailTest2=email.split('.');
    if (emailTest2.length !==2) {
      $("#test2").text("invalid email");
    }
    else {
      $("#test2").text("valid email");
    }
  }
}



// function phoneValidator(phoneNum){
//    var error = $("<p></p>").text("Invalid phone number")

//    if (phoneNum.length != 12) {
//        $("#submit-btn").after(error);
//        return;
//    }
//    for (var i = 0; i < 12; i++) {
//        if(i === 3 || i === 7) {
//            if (phoneNum[i]!= "-") {
//                $("#submit-btn").after(error);
//        return;
//            }
//        }
//    for (var i = 0; i < 12; i++) {
//        if(i != 3 && i !=7) {
//            if (isNaN(phoneNum[i])) {
//                $("#submit-btn").after(error);
//        return;
//            }
//        }        
//    }
// }
// }

// function emailValidator(email){
//    var error = $("<p></p>").text("Invalid email address")

//    if (email.length != 11) {
//        $("#submit-btn").after(error);
//        return;
//    }
// for (var i = 0; i < 11; i++) {
//        if(i === 3) {
//            if (email[i]!= "@") {
//                $("#submit-btn").after(error);
//        return;
//            }
//        }
//    for (var i = 0; i < 11; i++) {
//        if(i === 7) {
//            if (email[i] != ".") {
//                $("#submit-btn").after(error);
//        return;
//            }
//        }        
//    } 
// } 
// }

// $(document).ready(function() {
//    $("#submit-btn").click(function(){
//        phoneValidator($("#phone").val());
//         emailValidator($("#email").val());
// });
// });