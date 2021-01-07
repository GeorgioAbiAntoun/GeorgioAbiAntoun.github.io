//Declaring the needed variables
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

//This function will make sure both passwords match
function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//Hide placeholder when user clicks on input field
$(function(){
  $.each($('input'), function(index, value) {
   $(this).data('holder', $(this).attr('placeholder'));
 });

   $('input').focusin(function(){
       $(this).attr('placeholder','');
   });

   $('input').focusout(function(){
       $(this).attr('placeholder', $(this).data('holder'));
   });
})
