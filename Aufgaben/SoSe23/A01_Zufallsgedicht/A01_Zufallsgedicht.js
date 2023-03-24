/*
Aufgabe: L01 Zufallsgedicht
Name: Marie Walter
Matrikel: 271138
Datum: 24.03.2023
Quellen: -
*/
var randompoem;
(function (randompoem) {
    let subjekt = ["Oma", "Opa", "Lisbet", "Magda", "Erhard"];
    let praedikat = ["liest", "isst", "rollt", "hüpft", "schleicht"];
    let objekt = ["Rollmops", "Zeitung", "Tische", "Fische", "Zeit"];
    for (let _i = subjekt.length; _i > 0; _i--) {
        getVerse(subjekt, praedikat, objekt);
    }
    function getVerse(_subjektP, _praedikatP, _objektP) {
        let rNumberS = Math.floor(Math.random() * subjekt.length);
        let rNumberP = Math.floor(Math.random() * praedikat.length);
        let rNumberO = Math.floor(Math.random() * objekt.length);
        let randomSubjekt = subjekt.splice(rNumberS, 1);
        let randomPraedikat = praedikat.splice(rNumberP, 1);
        let randomObjekt = objekt.splice(rNumberO, 1);
        console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
        return;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=A01_Zufallsgedicht.js.map