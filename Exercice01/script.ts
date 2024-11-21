// Introduction de TypeScript
// Utilisation de variables
console.log("Bienvenue sur l'apprentissage de TypeScript");

let globalMessage: string = "Bonjour!";
console.log(globalMessage);

const globalFirstname: string = "Ruth";
globalMessage = `Bonjour ${globalFirstname}!`;
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
function sayHello(firstname: string, hour: number): void {
    let message: string;
    if (hour < 18) {
        message = `Bonjour ${firstname}!`;
    } else {
        message = `Bonsoir ${firstname}!`;
    }
    console.log(message);
    // Pour sélectionner l'élément <h1> avec typage explicite
    const heading: HTMLHeadingElement | null = document.querySelector('h1');

    // Pour vérifier si heading existe avant de modifier son texte
    if (heading) {
        heading.innerText = message;
}
    
}
const prenom:string = prompt("Entrez votre prénom :")
sayHello(prenom, 11); // Bonjour
sayHello(prenom, 18); // Bonsoir
sayHello(prenom, 17); // Bonjour
