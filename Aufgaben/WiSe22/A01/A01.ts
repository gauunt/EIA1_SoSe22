//Wörter definieren
let subjekt: string [] = ["Oma ", "Opa ", "Lisbet ", "Magda ", "Erhard "];
let praedikat: string [] = ["liest ", "isst ", "rollt ", "hüpft ", "schleicht "];
let objekt: string [] = ["Rollmops", "Zeitung", "Tische", "Fische", "Zeit"];

//erstellt Zufallsgedicht Schleife
for (let _i: number = subjekt.length; _i > 0; _i--) {
    getZeile(subjekt, praedikat, objekt);
}

//ordnet die Wörter zufällig
function getZeile(_subjekt: string[], _praedikat: string[], _objekt: string[]): string {

    let randomNumberS: number = Math.floor(Math.random() * subjekt.length);
    let  randomNumberP: number = Math.floor(Math.random() * praedikat.length);
    let randomNumberO: number = Math.floor(Math.random() * objekt.length);

    let randomS: string[] = _subjekt.splice(randomNumberS, 1);
    let randomP: string[] = _praedikat.splice(randomNumberP, 1);
    let randomO: string[] = _objekt.splice(randomNumberO, 1);

    console.log(randomS + " " + randomP + " " + randomO);
    return;
    
}