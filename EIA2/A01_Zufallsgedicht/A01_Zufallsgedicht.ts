/*
Aufgabe: L01 Zufallsgedicht
Name: Marie Walter
Matrikel: 271138
Datum: 24.03.2023
Quellen: -
*/

namespace randompoem {
    let subjekt: string[] = ["Oma", "Opa", "Lisbet", "Magda", "Erhard"];
    let praedikat: string[] = ["liest", "isst", "rollt", "hüpft", "schleicht"];
    let objekt: string[] = ["Rollmops", "Zeitung", "Tische", "Fische", "Zeit"];

    for (let _i: number = subjekt.length; _i > 0; _i--) {
        getVerse(subjekt, praedikat, objekt);
    }

    function getVerse(_subjektP: string[], _praedikatP: string[], _objektP: string[]): string {

        let rNumberS: number = Math.floor(Math.random() * subjekt.length);
        let rNumberP: number = Math.floor(Math.random() * praedikat.length);
        let rNumberO: number = Math.floor(Math.random() * objekt.length);

        let randomSubjekt: string[] = subjekt.splice(rNumberS, 1);
        let randomPraedikat: string[] = praedikat.splice(rNumberP, 1);
        let randomObjekt: string[] = objekt.splice(rNumberO, 1);

        console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
        return;
    }
}