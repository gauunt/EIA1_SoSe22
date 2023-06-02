/*
Aufgabe:02
Name: Marie Walter
Matrikel: 271138
Datum: 27.10.2022
Quellen: (in Zusammenarbeit mit) Lisa Blindenhöfer, Bastian Aberle
*/

namespace A03{

 window.addEventListener("load", handleload);

 function handleload(): void{
    document.querySelector("#addButton").addEventListener("click", newitem);
    document.querySelector("#trash").addEventListener("click", trash);
    document.querySelector("#check").addEventListener("click", check);
    console.log("load site")
 }

function newitem(): void{
    console.log("create new listelement: name, amout, date")
}
function trash(): void{
    console.log("delete item")
}
function check(): void{
    console.log("check item")
}
}