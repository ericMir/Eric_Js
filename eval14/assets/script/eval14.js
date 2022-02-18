

let randomNumber = Math.floor(Math.random() * 1000) + 1;
let devine = document.querySelector('.devine');
let dernierResultat = document.querySelector('.dernierResultat');
let plusOuMoins = document.querySelector('.plusOuMoins');
let soumettreReponse = document.querySelector('.soumettreReponse');
let champReponse = document.querySelector('.champReponse');
let compteurEssai = 1;
let resetButton;

function verifierReponse() {
    // const userGuess = Number(champReponse.value);
    const userGuess = champReponse.value;
    if (compteurEssai === 1) {
        devine.textContent = 'Réponse précédente: ';
    }

    devine.textContent += userGuess + ' ';
    if(userGuess < 0 || userGuess > 1000 || isNaN(userGuess) ){
        console.log("erreur");
        dernierResultat.textContent = 'arrête de boire!';

    }else{
        if (userGuess == randomNumber) {
            dernierResultat.textContent = 'Bien joué tu as trouvé le zombie!';
            dernierResultat.style.backgroundColor = 'green';
            plusOuMoins.textContent = '';
            setGameOver();
        } else if (compteurEssai === 10) {
            dernierResultat.textContent = 'GROAA les infectés envahissent Spooky town!';
            plusOuMoins.textContent = '';
            setGameOver();
        } else {
            dernierResultat.textContent = 'Tu as tué un civil!';
            dernierResultat.style.backgroundColor = 'red';
            if (userGuess < randomNumber) {
                plusOuMoins.textContent = 'Essaie plus haut!';
            } else if (userGuess > randomNumber) {
                plusOuMoins.textContent = 'Essaie plus bas!';
            }
            // else if (userGuess = NaN)
            // plusOuMoins.textContent = "ârrete de boire"
    
        }
    }

    compteurEssai++;
    champReponse.value = '';

}

soumettreReponse.addEventListener('click', verifierReponse);

function setGameOver() {
    champReponse.disabled = true;
    soumettreReponse.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Retente ta chance';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    compteurEssai = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    champReponse.disabled = false;
    soumettreReponse.disabled = false;
    champReponse.value = '';
    champReponse.focus();

    dernierResultat.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;


    //   function nanfromage() {
    //       if (isNaN(devine())){
    //           return setGameOver();
    //       }

    //   }
    //   const isNaN = function nanfromage() {
    //     const n = Number(value);
    //     return n !== n;
    // };
    // function nanfromage() {
    //     if(isNaN(userGuess()))  {
    //     plusOuMoins.textContent = 'Arrête de boire!';  }
    //   }


    // NaN.textContent = "ârrete de boire"
}
