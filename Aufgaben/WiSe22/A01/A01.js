//Wörter definieren
let subjekt = ["Oma", "Opa", "Lisbet", "Magda", "Erhard"];
let praedikat = ["liest", "isst", "rollt", "hüpft", "schleicht"];
let objekt = ["Rollmops", "Zeitung", "Tische", "Fische", "Zeit"];
//erstellt Zufallsgedicht Schleife
for (let _i = subjekt.length; _i > 0; _i--) {
    getZeile(subjekt, praedikat, objekt);
}
//ordnet die Wörter zufällig
function getZeile(_subjekt, _praedikat, _objekt) {
    let randomNumberS = Math.floor(Math.random() * subjekt.length);
    let randomNumberP = Math.floor(Math.random() * praedikat.length);
    let randomNumberO = Math.floor(Math.random() * objekt.length);
    let randomS = _subjekt.splice(randomNumberS, 1);
    let randomP = _praedikat.splice(randomNumberP, 1);
    let randomO = _objekt.splice(randomNumberO, 1);
    console.log(randomS + " " + randomP + " " + randomO + ".");
    return;
}
//# sourceMappingURL=A01.js.map