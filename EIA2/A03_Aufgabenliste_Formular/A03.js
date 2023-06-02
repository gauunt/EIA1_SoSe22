/*
Aufgabe:L03_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 08.04.2023
Quellen: Abgabe letztes Semester
*/
var ToDoList;
(function (ToDoList) {
    window.addEventListener("load", handleList);
    function handleList() {
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
    function create() {
        console.log("Event: click button, add task, create date, create time, create name, create comment");
    }
    function checkButton() {
        console.log("Event: click checkbox");
    }
    function checkTask() {
        console.log("checkbox clicked");
    }
    function deleteItem() {
        console.log("Event: click trash, -> löschen von item später möglich");
    }
    function editItem() {
        console.log("Event: click item, -> editieren später möglich");
    }
})(ToDoList || (ToDoList = {}));
//# sourceMappingURL=A03.js.map