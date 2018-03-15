// Création de la fonction prompt



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

// Génération du RandomNumber

var nb = nb_aleatoire(1, 100);
console.log("L'ordinateur lance le dé.... " +"\n");
console.log("A vous de deviner maintenant :" +"\n")
console.log("NOTE DEV:test variable nb" + nb)

// Conditions de victoire ou défaite

var compteCoups = 0;
var saisie;

do
{   function prompt(saisie) { 

        var saisie = prompt("Le nombre à deviner est compris entre 1 et 100.","");
        compteCoups++;
        // Message a afficher au prochain tour :
        if(saisie > nb)
          console.log ("C'est moins");
        else
          console.log("C'est plus");
}
}
while(saisie != nb);

console.log("Bravo, tu as gagne en " + compteCoups + " coups !");