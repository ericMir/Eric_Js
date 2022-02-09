alert("Bienvenu jeune aventurier dans la calculette de l'enfer!");

var ready = confirm("Voulez vous effectuer un calcul?"); //confirm crée un dial box oui/non output true / false
function calculette() {
  var choice = prompt(
    "1- addition  \n 2- soustraction \n 3- multiplication \n 4- division"
  );
  console.log(calculette);
  console.log(typeof calculette);
  
  if (choice === 1 || choice === 2 || choice === 3 || choice === 4) {
    return choice;
  } else {
    throw new Error("Tu ne peut pas calculer ça");
  }

alert("Il faut maintenant rentrer une première valeur");
var premier_nombre = a
alert("Il faut maintenant rentrer une seconde valeur");
var second_nombre = b

var calcul = choice()
switch (calcul) {
  case 1:
    function addition(a,b){
      return (a+b)
  }
    alert(
    "voilà le résultat de l'addition a + b:" + addition()
        );
    break;
  case 2:
    function soustraction(a,b){
      return (a-b)
    }
    alert(
      "voilà le résultat de la soustraction a - b :" + soustraction()
    );
    break;
  case 3:
    function multiplication(a,b){
      return (a*b)
    }
    alert(
      "voilà le résultat de la multiplication a * b:" + multiplication()
    );
    break;
  case 4:
    function division(a,b){
      return (a/b)
    }
    alert(
      "voilà le résultat de la division a / b:" + division()
      );
      break;    
}
}
// calculArrow = (a, b) => {
//   return a + b;
// }
