
$(document).on('mousemove', function(e){
   $('#box').css({
      left:  e.pageX,
      top:   e.pageY
   });
});

// $(document).keypress(function(){

// })

var color = $(document).keypress(function(e){
   if (e.keyCode === 103) {  //checks whether the pressed key is "G"
       $("#body").css({"background-color": "green"})
   }
});

// $("#body").keydown(function(e) {
//     // Sets the color when the key is down...
//     if(e.which === 13) {
//         $(this).css("background-color", "red");
//     }
// });
// $("#body").keyup(function() {
//     // Removes the color when any key is lifted...
//     $(this).css("background-color", "");
// });