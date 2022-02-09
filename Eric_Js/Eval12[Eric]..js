alert("Bienvenue jeune aventurier dans la calculette de l'enfer!");

var ready = confirm("Voulez vous effectuer un calcul?");
if(ready === true){
  // calculette();
}
function calculette() {
  var choice = prompt(
    " 1- addition  \n 2- soustraction \n 3- multiplication \n 4- division"
  );
  // console.log(calculette);
  // console.log(typeof calculette);
  
  if (choice == 1 || choice == 2 || choice == 3 || choice == 4) {
    return choice;
  } else {
    calculette() 
   }
}

function addition(valeur1,valeur2){
  return (valeur1 + valeur2)
}

function soustraction(valeur1,valeur2){
  return (valeur1-valeur2)
}

function multiplication(valeur1,valeur2){
  return (valeur1*valeur2)
}

function division(valeur1,valeur2){
  return (valeur1/valeur2)
}


var machin = calculette();
var a = "null";
var b = "null";


while (isNaN(a)||isNaN(b)){
var a = prompt("Il faut maintenant rentrer une première valeur");
var b = prompt("Il faut maintenant rentrer une seconde valeur");
a = Number(a);
b = Number(b);
}


// machin = Number(machin);
switch (machin) {
  case "1":
    alert(
    "voilà le résultat de l'addition a + b: " + addition(a,b)
        );
    break;


  case "2":

    alert(
      "voilà le résultat de la soustraction a - b : " + soustraction(a,b)
    );
    break;
  case "3":

    alert(
      "voilà le résultat de la multiplication a * b:" + multiplication(a,b)
    );
    break;
  case "4":

    alert(
      "voilà le résultat de la division a / b:" + division(a,b)
      );
      break;    
}


// calculArrow = (a, b) => {
//   return a + b;
// }
