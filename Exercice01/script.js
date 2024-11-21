// Introduction de TypeScript
// Utilisation de variables
console.log("Bienvenue sur l'apprentissage de TypeScript");
var globalMessage = "Bonjour!";
console.log(globalMessage);
var globalFirstname = "Ruth";
globalMessage = "Bonjour ".concat(globalFirstname, "!");
console.log(globalMessage);
/*
// Fonction 1 avec un paramètre
function sayHello(firstname: string): void {
    let message: string = `Bonjour ${firstname}!`;
    console.log(message);
}

sayHello("Ruth");
*/
// Fonction avec deux paramètres
function sayHello(firstname, hour) {
    var message;
    if (hour < 18) {
        message = "Bonjour ".concat(firstname, "!");
    }
    else {
        message = "Bonsoir ".concat(firstname, "!");
    }
    console.log(message);
    // Pour sélectionner l'élément <h1> avec typage explicite
    var heading = document.querySelector('h1');
    // Pour vérifier si heading existe avant de modifier son texte
    if (heading) {
        heading.innerText = message;
    }
}
var prenom = prompt("Entrez votre prénom :");
sayHello(prenom, 11); // Bonjour
sayHello(prenom, 18); // Bonsoir
sayHello(prenom, 17); // Bonjour
