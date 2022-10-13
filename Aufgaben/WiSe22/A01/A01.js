//Wörter definieren
let subjekt = ["Oma", "Opa", "Lisbet", "Magda", "Erhard"];
let praedikat = ["liest", "isst", "rollt", "hüpft", "schleicht"];
let objekt = ["Rollmops", "Zeitung", "Tische", "Fische", "Zeit"];
//erstellt Zufallsgedicht
for (let _i = subjekt.length; _i > 0; _i--) {
    getVerse(subjekt, praedikat, objekt);
}
//ordnet die Wörter zufällig
function getVerse(_subjekt, _praedikat, _objekt) {
    let rNumberS = Math.floor(Math.random() * subjekt.length);
    let rNumberP = Math.floor(Math.random() * praedikat.length);
    let rNumberO = Math.floor(Math.random() * objekt.length);
    let randomSubjekt = _subjekt.splice(rNumberS, 1);
    let randomPraedikat = _praedikat.splice(rNumberP, 1);
    let randomObjekt = _objekt.splice(rNumberO, 1);
    console.log(randomSubjekt + "" + randomPraedikat + "" + randomObjekt);
    return;
}
//# sourceMappingURL=A01.js.map