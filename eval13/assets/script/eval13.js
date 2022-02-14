let arrayOfQuotes = [["Mamamia", "Mario"],
["Le coup le plus rusé que le diable ait jamais réussi, c’est de faire croire à tout le monde qu’il n’existait pas.", "Kevin Spacey - Usual Suspects de Bryan Singer"],
["J’ai dégusté son foie avec des fèves au beurre et un excellent Chianti", "Anthony Hopkins - Le silence des agneaux de Jonathan Demme"],
["La vérité c’est comme une couverture trop petite. Tu peux tirer dessus de tous les côtés, tu auras toujours les pieds froids.", "Peter Weir - Le cercle des poètes disparus"],
["On m’appelle Le Doctor, ou le gardien, ou « dégagez de cette planète ! » quoique à proprement parler ce n’est peut-être pas vraiment un nom.", "Doctor Who, le onzième docteur."],
["Tes fautes de fils sont mes défaillances de père.", "Gladiator, Marc Aurèle. "],
["- Luc, je suis ton père.", " L'Empire contre-attaque , Darth Vader"],
["Aussi loin que je me souvienne, j’ai toujours voulu être un gangster. ", "Les affranchis, Henry Hill. "],
["- Excusez-moi mais vous êtes en train d’uriner sur ma voiture.  -Hein ? Ho, Ha oui ! … Mais c’est parce que j’ai la même là bas, j’ai confondu ! … Je peux finir ? - Oui.", "Les bronzés font du ski. "]]

var button = document.querySelector("button");
var citation = document.querySelector("h1");
var auteur = document.querySelector("h2");
var save     = null;

function randomCitation() {
    return Math.floor(Math.random() * arrayOfQuotes.length);
}
button.addEventListener("click",cliquer);


function cliquer() {
let result = randomCitation();
    if (save != result){
        citation.textContent =  arrayOfQuotes[result][0];
        auteur.textContent =  arrayOfQuotes[result][1];    
} else {
    cliquer();  
    }
    save = result;
}
// "${citations[cita][0]}"





