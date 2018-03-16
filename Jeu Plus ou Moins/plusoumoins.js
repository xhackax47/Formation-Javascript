/*
/                                       JEU DU PLUS ET DU MOINS
/                                           JAVA SCRIPT
/@author= Samy
*/

// Création de la fonction nb_aleatoire 

function nb_aleatoire(min, max)

{

     var nb = min + (max-min+1)*Math.random();

     return Math.floor(nb);

}

// Jeu du Plus ou Moins en JS par Samy

console.log ("Bienvenue dans le jeu du plus ou du moins" +"\n")
console.log ("Voici les règles du jeu :" +"\n")
console.log ("L'ordinateur va générer un nombre au hasard" +"\n")
console.log ("A vous de deviner lequel est-ce..." +"\n")
console.log ("L'ordinateur vous dira si vous êtes trop haut ou trop bas" +"\n")

// Génération du nombre aléatoire servant pour la victoire

var nbwin = nb_aleatoire(1, 100);
console.log("L'ordinateur lance le dé.... " +"\n");
console.log("A vous de deviner maintenant :" +"\n")
console.log("NOTE DEV:test variable nb = " + nbwin)

// Déclarer constante de l'invite de commande

const prompt = require('prompt');
        
// Demande à l'utilisateur de choisir un nombre

prompt.start();
prompt.get(['chiffre'], function (err, result){

const chiffre = Number(result.chiffre);

// Boucle d'appel "Fais la verification tant que la variable saisie est différente de la variable nb"


    do

    {

      if (chiffre === nbwin) 
        {
        // L'utilisateur à bien répondu
        console.log("Victoire !!!!! Bien joué le chiffre était : ", nbwin);
        // Nous demandons a Node de fermer le programme
        process.exit();
        }

        else if (chiffre < nbwin) 
        {
        console.log("Un peu trop bas, recommence");
        process.exit();
        } 

        else 
        {
          console.log("Un peu trop haut, recommence");
          process.exit();
        }
      }

    while(chiffre != nbwin); 

  }
)
;