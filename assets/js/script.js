function myFunction() {
var regex = new RegExp(/^[\d]+.+[\d]$/);
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
if(regex.test(firstNumber) & regex.test(secondNumber)){
  var result = Math.trunc(firstNumber) * secondNumber;
  alert(result);
} else {
  alert ('merci de remplir correctement tous les champs');
}
}
