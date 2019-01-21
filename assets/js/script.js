function myFunction() {
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
if(isNaN(firstNumber)==false && isNaN(secondNumber)==false){
  var result = Math.trunc(firstNumber) * secondNumber;
  alert(result);
} else {
  alert ('merci de remplir des chiffres');
}
}
