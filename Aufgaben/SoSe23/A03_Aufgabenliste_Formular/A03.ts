/*
Aufgabe:L03_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 08.04.2023
Quellen: Abgabe letztes Semester
*/
namespace ToDoList {

    window.addEventListener("load", handleList);

    function handleList(): void {
        console.log(" Event: window onload, Lade die Liste");
        document.querySelector(".but").addEventListener("click", create);
        document.querySelector("#inprogress").addEventListener("click", checkButton);
        document.querySelector("#done").addEventListener("click", checkButton);
        document.querySelector("#trash").addEventListener("click", deleteItem);
        document.querySelector("#item1").addEventListener("click", editItem);
        document.querySelector("#item2").addEventListener("click", editItem);
        document.querySelector("#item3").addEventListener("click", editItem);
        document.querySelector("#item4").addEventListener("click", editItem);
    }

    function create(): void {
        console.log("Event: click button, add task, create date, create time, create name, create comment");
    }

    function checkButton(): void {
        console.log("Event: click checkbox");
    }

    function checkTask(): void {
        console.log("checkbox clicked")
    }

    function deleteItem(): void {
        console.log("Event: click trash, -> löschen von item später möglich");
    }

    function editItem(): void {
        console.log("Event: click item, -> editieren später möglich");
    }
}