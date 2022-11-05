/*
Aufgabe:02
Name: Marie Walter
Matrikel: 271138
Datum: 27.10.2022
Quellen: (in Zusammenarbeit mit) Lisa Blindenhöfer, Bastian Aberle
*/
var A03;
(function (A03) {
    window.addEventListener("load", handleload);
    function handleload() {
        document.querySelector("#addButton").addEventListener("click", newitem);
        document.querySelector("#trash").addEventListener("click", trash);
        document.querySelector("#check").addEventListener("click", check);
        console.log("load site");
    }
    function newitem() {
        console.log("create new listelement: name, amout, date");
    }
    function trash() {
        console.log("delete item");
    }
    function check() {
        console.log("check item");
    }
})(A03 || (A03 = {}));
//# sourceMappingURL=A03.js.map