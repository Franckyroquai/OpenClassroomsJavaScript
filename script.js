// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entez le mot : " + listeMots[i])
    if (motUtilisateur === listeMots[i]) {
        score++
    }
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")