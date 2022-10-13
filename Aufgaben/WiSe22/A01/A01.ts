//Wörter definieren
let subjekt: string [] = ["Oma", "Opa", "Lisbet", "Magda", "Erhard"];
let praedikat: string [] = ["liest", "isst", "rollt", "hüpft", "schleicht"];
let objekt: string [] = ["Rollmops", "Zeitung", "Tische", "Fische", "Zeit"];

//erstellt Zufallsgedicht
for (let _i: number = subjekt.length; _i > 0; _i--) {
    getVerse(subjekt, praedikat, objekt);
}

//ordnet die Wörter zufällig
function getVerse(_subjekt: string[], _praedikat: string[], _objekt: string[]: string{

    let rNumberS: number = Math.floor(Math.random()*subjekt.length);
})