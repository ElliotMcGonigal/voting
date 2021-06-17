$(document).ready(function() {
  const userAge = parseInt(prompt("How old are you?"));

  if(userAge >= 18){
    $('#oldEnough').show();
  }
  else {
    $('#notOldEnough').show();
  }
});