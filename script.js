const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

let score = 0

let choix = prompt("Veuillez choisir la liste mots ou phrases")
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste mots ou phrases")
}

if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Entez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let motUtilisateur = prompt("Entez la phrase : " + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}