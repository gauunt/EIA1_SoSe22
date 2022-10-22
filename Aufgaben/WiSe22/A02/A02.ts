/*
Aufgabe:02
Name: Marie Walter
Matrikel: 271138
Datum: 22.10.2022
Quellen: Bastian Aberle, Lisa Blindenhöfer
*/

namespace A02 {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
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

    function setInfoBox(_event: MouseEvent): void {

        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let moveSpan: HTMLElement = document.getElementById("span");
        moveSpan.style.position = "absolute";
        moveSpan.style.left = x + 5 + "px";
        moveSpan.style.top = y + 5 + "px";
        let mouseTar: EventTarget = _event.target;
        
        document.querySelector("span").innerHTML = ("x: " + x + " y: " + y + " target: " + mouseTar);
    }

    function logInfo(_event: Event): void {
    let eventType: string = _event.type;
    let event: Event = _event;
    let mouseTar: EventTarget = _event.target;
    let currentTar: EventTarget = _event.currentTarget;
    console.log("Target: " + mouseTar);
    console.log("Current Target: " + currentTar);
    console.log("Event: " + event);
    console.log("Event Type: " + eventType);
    }

    function clickedBut(_event: CustomEvent): void {
        let ePath: EventTarget[] = _event.composedPath();

        if (ePath[5] == document) {
            console.log("abgefangenes DOM-Event: " + _event);
        }
}}