/*
Aufgabe:02
Name: Marie Walter
Matrikel: 271138
Datum: 22.10.2022
Quellen: Bastian Aberle, Lisa Blindenhöfer
*/
var A02;
(function (A02) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("click", logInfo);
        document.querySelector(".but0").addEventListener("click", clickedBut);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector(".div0").addEventListener("click", logInfo);
        document.querySelector(".div1").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector(".div0").addEventListener("keyup", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);
        document.addEventListener("mousemove", setInfoBox);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let moveSpan = document.getElementById("span");
        moveSpan.style.position = "absolute";
        moveSpan.style.left = x + 5 + "px";
        moveSpan.style.top = y + 5 + "px";
        let mouseTar = _event.target;
        document.querySelector("span").innerHTML = ("x: " + x + " y: " + y + " target: " + mouseTar);
    }
    function logInfo(_event) {
        let eventType = _event.type;
        let event = _event;
        let mouseTar = _event.target;
        let currentTar = _event.currentTarget;
        console.log("Target: " + mouseTar);
        console.log("Current Target: " + currentTar);
        console.log("Event: " + event);
        console.log("Event Type: " + eventType);
    }
    function clickedBut(_event) {
        let ePath = _event.composedPath();
        if (ePath[5] == document) {
            console.log("abgefangenes DOM-Event: " + _event);
        }
    }
})(A02 || (A02 = {}));
//# sourceMappingURL=A02.js.map