var typescript;
(function (typescript) {
    //Objekt mit Fragen und ein array mit den Antwortmöglichkeiten
    var question = [
        { fragen: "Kann man in TypeSript Daten berechnen lassen?", antworten: "Ja", möglichkeiten: ["Ja", "Nein"] },
        { fragen: "Können mit TypeSript interaktive Buttons erstellt werden?", antworten: "Ja", möglichkeiten: ["Ja", "Nein"] },
        { fragen: "Events sind:", antworten: "Ereignisse, die Funktionen auslösen können", möglichkeiten: ["Ereignisse, die Funktionen auslösen können", "zum Beispiel Festivals"] },
        { fragen: "Was kann durch verschiedene Methoden über das Skript manipuliert werden?", antworten: "der DOM", möglichkeiten: ["der DOM", "die Hintergrundfarbe"] },
        { fragen: "Mit was können Anweisungsblöcke gezielt aufgerufen werden?", antworten: "Funktionen", möglichkeiten: ["Funktionen", "Namentlich"] },
        { fragen: "Arrays sind Variablentypen zur Speicherung von…", antworten: "mehreren Elementen", möglichkeiten: ["mehreren Elementen", "einzelnen Elementen"] },
        { fragen: "Welche dieser Schleifen gibt es nicht beim Programmieren?", antworten: "Haarschleife", möglichkeiten: ["Haarschleife", "if-Else"] },
        { fragen: "Was ist for?", antworten: "eine Schleife", möglichkeiten: ["eine Schleife", "farblicher oberer Rand"] },
        { fragen: "Objekte können … Eigenschaft/-en zu einem Objekt speichern.", antworten: "mehrere", möglichkeiten: ["mehrere", "nur eine"] },
        { fragen: "Die Identifizierung von Fehlern nennt man…", antworten: "Debugging", möglichkeiten: ["Debugging", "Realisation"] }
    ];
    // globale Variable: sucht random Frage aus Objekt heraus
    var random1;
    //beim Laden der Seite soll Fkt. aufgerufen werden
    window.onload = sentences;
    //Funktion, die Sätze mit Antwortmöglichkeiten random ausgibt
    function sentences() {
        //random1 Variable, die random Sätze und Wörter berechnet
        random1 = Math.floor(Math.random() * question.length);
        //test über console
        console.log(random1);
        //überschreibt html mit random generierten Fragen
        document.querySelector("#fragen").innerHTML = question[random1].fragen;
        //console.log(question[random1].fragen);
        //for-Schleife , die den Möglichkeiten eine Klasse zuordnet und div erstellt --> Möglichkeiten in random Reihenfolge ausgibt
        for (let index = 0; index < question[random1].möglichkeiten.length; index++) {
            //Variable erstellt neues div element
            var newelement = document.createElement("div");
            //fügt Klasse "divsingleanswer" hinzu 
            newelement.innerHTML = question[random1].möglichkeiten[index];
            newelement.classList.add("divsingleanswer");
            //hängt neues Element an id "random" an 
            var getelement = document.querySelector("#random");
            getelement.appendChild(newelement);
            //Es werden Elemente in random Reihenfolge ausgegeben
            for (let index = getelement.children.length; index >= 0; index--) {
                getelement.appendChild(getelement.children[Math.random() * index | 0]);
            }
        }
    }
    //ruft Funktion "zaehler" auf bei click auf Antwortmöglichkeiten
    document.querySelector("#random").addEventListener("click", zaehler);
    //globale Variable, die die Clicks zählt
    var clickindex = 0;
    //globale Variable, zählt die Aufgaben
    var levelcount = 0;
    //Fkt. zählt den Click auf ausgewählte Antwortmöglichkeit --> vergleicht dannn den Wert der gecklickten mit der an der Stelle des arrays
    // & gibt dementsprechend wenn es richtig ist in inner html aus + addiert Punkt / wenn es falsch ist nicht + alert
    function zaehler() {
        clickindex++;
        if (clickindex == 1) {
            var value1 = document.querySelector(".divsingleanswer:hover").innerHTML;
            var array1 = question[random1].möglichkeiten[0];
            //Wenn der Wert der gehoverten Antwortmöglichkeit mit dem des arrays übereinstimmt,
            //soll das Wort innerhtml an der stlle #right ausgegeben werden und ein Punkt wird addiert
            //je nach richtig oder falsch ertönt ein Geräusch
            //wenn die 5 Punkte erreicht sind ist das Spiel vorbei
            if (value1 == array1) {
                points();
                document.querySelector("#right").innerHTML = question[random1].möglichkeiten[0];
                this.audio = new Audio();
                this.audio.src = "./correct-6033.mp3";
                this.audio.load();
                this.audio.play();
                if (counter >= 5) {
                    document.querySelector("#fragen").innerHTML = "";
                    document.querySelector("#fragen").innerHTML = "Dein finaler Punktestand: " + counter;
                    document.querySelector("#right").innerHTML = "";
                    document.querySelector("#right").innerHTML = "Glückwunsch!";
                    document.querySelector("#random").innerHTML = "";
                    document.querySelector("#random").innerHTML = "Gehe zurück zur Startseite, um das nächste Thema zu spielen!";
                    document.querySelector("#weiter").innerHTML = "";
                }
            }
            //ansonsten kommt alert und das Geräusch dazu
            else {
                clickindex--;
                this.audio = new Audio();
                this.audio.src = "./wronganswer-37702.mp3";
                this.audio.load();
                this.audio.play();
                alert("Das war die falsche Antwort");
            }
        }
    }
    //bei klicken von weiterbutton kommt die nächste Frage
    document.querySelector("#weiter").addEventListener("click", weiterbutton);
    function weiterbutton() {
        levelcount++;
        clearright();
        clickindex = 0;
        document.querySelector("#random").innerHTML = "";
        sentences2();
    }
    //Variable für den Punktestand
    var counter = 0;
    //überschreibt Punkte und zählt hoch
    function points() {
        counter++;
        document.querySelector("#points").innerHTML = "Punkte: " + counter;
    }
    //Fkt. macht den Platz von letzer Antwort wieder leer
    function clearright() {
        var clearwords = document.getElementById("right");
        document.querySelector("#right").innerHTML = "";
    }
    //zweite question Fkt., genau gleich um Antwortmöglichkeiten neu zu laden nach klick auf Weiterbutton
    function sentences2() {
        random1 = Math.floor(Math.random() * question.length);
        console.log(random1);
        document.querySelector("#fragen").innerHTML = question[random1].fragen;
        for (let index = 0; index < question[random1].möglichkeiten.length; index++) {
            var newelement = document.createElement("div");
            newelement.innerHTML = question[random1].möglichkeiten[index];
            newelement.classList.add("divsingleanswer");
            var getelement = document.querySelector("#random");
            getelement.appendChild(newelement);
            for (let index = getelement.children.length; index >= 0; index--) {
                getelement.appendChild(getelement.children[Math.random() * index | 0]);
            }
        }
    }
})(typescript || (typescript = {}));
//# sourceMappingURL=typescript.js.map