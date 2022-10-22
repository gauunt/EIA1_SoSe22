/*
Aufgabe: 02
Name: Marie Walter
Matrikel Nr.: 271138
Datum: 22.10.2022
Quellen: Bastian Aberle, Lisa Blindenhöfer
*/
var A02;
(function (A02) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        window.addEventListener("click", function () {
            document.querySelector("body").addEventListener("click", logInfo);
            document.querySelector("div0").addEventListener("click", logInfo);
            document.querySelector("div1").addEventListener("click", logInfo);
            document.querySelector("body").addEventListener("keyup", logInfo);
            document.querySelector("div0").addEventListener("keyup", logInfo);
            document.querySelector("div1").addEventListener("keyup", logInfo);
            document.querySelector("mousemove", setInfoBox);
            document.querySelector("button").addEventListener("click", button);
        });
    }
    function setInfoBox(_event) {
        let ix = _event.clientX;
        let iy = _event.clientY;
        console.log([ix, iy]);
        let hover = document.getElementsByClassName("span");
        hover.style.position = "absolute";
        hover.style.left = ix + 10 + "px";
        hover.style.top = iy + 10 + "px";
        let cursortarget = _event.target;
        document.querySelector("span").textContent = ix + "," + " " + iy + "," + "target:" + cursortarget;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function button(_event) {
        let path = _event.composedPath();
        if (path[5] == document) {
            console.log(_event);
        }
    }
})(A02 || (A02 = {}));
//# sourceMappingURL=A02.js.map