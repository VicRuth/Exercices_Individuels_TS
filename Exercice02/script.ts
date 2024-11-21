// Jeu: guess a number
// Etape 1: Demander un nombre à l'utilisateur
/*
Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. 
Stocker sa réponse dans une variable de type adéquat nommée givenNumber.
 */
/*
function askNumber(): number | null {
    const input = prompt("Bonjour, pourriez-vous entrer un nombre ?");
    if (input === null) {
        alert("Aucun nombre saisi.");
        return null;
    }
    const givenNumber: number = parseInt(input, 10);
    if (isNaN(givenNumber)) {
        alert("La valeur saisie n'est pas un nombre valide.");
        return null;
    }
    console.log("Nombre saisi :", givenNumber);
    return givenNumber;
}

// Etape 2: Deviner le nombre

Pour le moment nous allons considérer que le nombre à deviner est 22.
Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin
Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
Si le nombre est plus quand que 22 on affichera à l’utilisateur “Plus petit”.
Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.

Créer une fonction gamePlay qui gérera vos appels de fonctions et 
la transmission de votre variable d’une fonction à une autre.
 */
/*
// Fonction pour déviner le nombre
function didIWin(givenNumber: number): void {
    const target = 22; // Nombre à deviner
    if (givenNumber < target) {
        alert("Plus grand");
    } else if (givenNumber > target) {
        alert("Plus petit");
    } else {
        alert("Bravo ! Vous avez deviné le nombre !");
    }
}

// Fonction pour gérer les appels de fonctions
function gamePlay(): void {
    const givenNumber: number | null = askNumber();
    if (givenNumber !== null) {
        didIWin(givenNumber); // Appeler la fonction uniquement si givenNumber n'est pas null
    } else {
        console.log("Fin de la partie : aucun nombre valide fourni.");
    }
}

// Lancer le jeu
gamePlay();
*/
//Étape 3: Boucle
/*
Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu.
En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.
*/
/*
// Fonction pour deviner le nombre
function didIWin(givenNumber: number): boolean {
    const target = 22; // Nombre à deviner
    if (givenNumber < target) {
        alert("Plus grand");
        return false;
    } else if (givenNumber > target) {
        alert("Plus petit");
        return false;
    } else {
        alert("Bravo ! Vous avez deviné le nombre !");
        return true;
    }
}

// Fonction pour gérer les appels de fonctions
function gamePlay(): void {
    let hasWon = false; // Initialisation : le joueur n'a pas encore gagné
    do {
        const givenNumber: number | null = askNumber(); // Demander un nouveau nombre
        if (givenNumber !== null) {
            hasWon = didIWin(givenNumber); // Mettre à jour l'état en fonction de la réponse
        } else {
            console.log("Fin de la partie : aucun nombre valide fourni.");
            break; // Sortir de la boucle si l'utilisateur annule
        }
    } while (!hasWon); // Continuer tant que le joueur n'a pas gagné
}

// Lancer le jeu
gamePlay();
*/

//Étape 4
/*
Maintenant on va considérer que l’on a pas un seul joueur mais 2 🧑‍🤝‍🧑.
Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 
tant qu’il ne respecte pas ce range.
La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné.
 */
/*
// Fonction pour demander un nombre au joueur 1
function askNumber(): number {
    let target: number | null = null;
    do {
        const input = prompt("Joueur 1, entrez un nombre compris entre 0 et 50 :");
        if (input === null) {
            alert("Aucun nombre saisi. Veuillez entrer un nombre valide.");
            continue;
        }
        target = parseInt(input, 10);
        if (isNaN(target) || target < 0 || target > 50) {
            alert("Veuillez entrer un nombre valide entre 0 et 50.");
            target = null; // Réinitialiser pour rester dans la boucle
        }
    } while (target === null);
    console.log("Nombre à deviner défini par le joueur 1 :", target);
    return target;
}

// Fonction pour deviner le nombre (mise à jour pour prendre en compte le nombre cible)
function didIWin(givenNumber: number, target: number): boolean {
    if (givenNumber < target) {
        alert("Plus grand");
        return false;
    } else if (givenNumber > target) {
        alert("Plus petit");
        return false;
    } else {
        alert("Bravo ! Joueur 2 a deviné le nombre !");
        return true;
    }
}

// Fonction pour gérer la partie
function gamePlay(): void {
    const targetNumber = askNumber(); // Joueur 1 choisit le nombre
    let hasWon = false; // Initialisation : le joueur 2 n'a pas encore gagné
    do {
        const givenNumber: number | null = askNumber(); // Joueur 2 propose un nombre
        if (givenNumber !== null) {
            hasWon = didIWin(givenNumber, targetNumber); // Vérifie si le joueur 2 a gagné
        } else {
            console.log("Joueur 2 a annulé la partie.");
            break; // Sortir de la boucle si le joueur 2 annule
        }
    } while (!hasWon); // Continuer tant que le joueur 2 n'a pas gagné
}

// Fonction pour demander un nombre à un joueur
function askNumber(): number | null {
    const input = prompt("Joueur 2, entrez un nombre pour deviner :");
    if (input === null) {
        alert("Aucun nombre saisi.");
        return null;
    }
    const givenNumber = parseInt(input, 10);
    if (isNaN(givenNumber)) {
        alert("La valeur saisie n'est pas un nombre valide.");
        return null;
    }
    console.log("Nombre proposé par le joueur 2 :", givenNumber);
    return givenNumber;
}

// Lancer le jeu
gamePlay();
*/

// Etape 5:
let targetNumber: number | null = null; // Nombre à deviner
let attempts: number = 0; // Nombre de tentatives

//Fonction pour demander au joueur 1 de définir un nombre à deviner.
function askNumber(): number {
    let givenNumber: number=0;

    do {
        const input: string | null = prompt("Joueur 1, entrez un nombre compris entre 0 et 50 :");
        if (input === null) {
            alert("Aucun nombre saisi. Réessayez.");
            continue; // Recommence si aucun nombre n'est saisi
        }
        givenNumber = parseInt(input, 10);
        if (isNaN(givenNumber) || givenNumber < 0 || givenNumber > 50) {
            alert("Veuillez entrer un nombre valide entre 0 et 50.");
        }
    } while (isNaN(givenNumber) || givenNumber < 0 || givenNumber > 50);

    console.log("Nombre à deviner défini par le joueur 1 :", givenNumber);
    return givenNumber;
}

/**
 * Met à jour l'interface utilisateur avec un message et les tentatives.
 * @param message - Le message à afficher à l'utilisateur.
 */
function updateUI(message: string): void {
    const messageEl = document.getElementById("message");
    const attemptsEl = document.getElementById("attempts");

    if (messageEl) messageEl.textContent = message;
    if (attemptsEl) attemptsEl.textContent = `Tentatives : ${attempts}`;
}

/**
 * Vérifie si le joueur 2 a deviné le nombre et retourne le résultat.
 * @param guessedNumber - Le nombre proposé par le joueur 2.
 * @returns true si le joueur a gagné, false sinon.
 */
function checkGuess(guessedNumber: number): boolean {
    if (guessedNumber < targetNumber!) {
        updateUI("Plus grand !");
        return false;
    } else if (guessedNumber > targetNumber!) {
        updateUI("Plus petit !");
        return false;
    } else {
        updateUI("Bravo ! Vous avez deviné le nombre !");
        return true;
    }
}

/**
 * Termine le jeu en désactivant l'interface utilisateur.
 */
function endGame(): void {
    const gameArea = document.getElementById("game-area");
    if (gameArea) gameArea.innerHTML = ""; // Effacer la zone de jeu
    const messageEl = document.getElementById("message");
    if (messageEl) messageEl.textContent = "Bravo ! Vous avez trouvé le nombre.";
}

/**
 * Initialisation et gestion du jeu.
 */
function gamePlay(): void {
    targetNumber = askNumber(); // Joueur 1 choisit le nombre

    const validateBtn = document.getElementById("validate-btn");
    const inputEl = document.getElementById("input-number") as HTMLInputElement;

    if (validateBtn && inputEl) {
        validateBtn.addEventListener("click", () => {
            const guessedValue = parseInt(inputEl.value, 10);

            if (isNaN(guessedValue)) {
                updateUI("Veuillez entrer un nombre valide.");
                return;
            }

            attempts++; // Incrémenter les tentatives

            if (checkGuess(guessedValue)) {
                endGame();
            } else {
                inputEl.value = ""; // Réinitialiser le champ pour la prochaine tentative
            }
        });
    }
}

// Lancer le jeu
gamePlay();

