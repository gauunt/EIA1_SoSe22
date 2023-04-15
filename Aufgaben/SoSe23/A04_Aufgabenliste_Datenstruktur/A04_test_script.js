/*
Aufgabe:L04_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 13.04.2023
Quellen: Abgabe letztes Semester
*/
var todolistA04;
(function (todolistA04) {
    //globale Variablen
    let task;
    let date;
    let time;
    let who;
    let comment;
    let nextTask;
    //onload window Listener
    window.addEventListener("load", loadList);
    //lädt Liste und ruft loadData auf
    function loadList() {
        document.querySelector("h2").addEventListener("click", loadInput);
        loadData();
    }
    //lädt die Daten aus der data.ts in globale Variablen 
    function loadData() {
        for (let counter = 0; counter < todolistA04.savedInputs.length; counter++) {
            task = todolistA04.savedInputs[counter].savedTask;
            date = todolistA04.savedInputs[counter].savedDate;
            time = todolistA04.savedInputs[counter].savedTime;
            who = todolistA04.savedInputs[counter].savedWho;
            comment = todolistA04.savedInputs[counter].savedComment;
            //umwandlung nextTask von boolean in string
            let nextTaskString = todolistA04.savedInputs[counter].savedPurchase.toString();
            if (nextTaskString == "false") {
                nextTask = "";
            }
            else {
                nextTask = " buy";
            }
            //generiere nun einen neuen Eintrag in der Liste 
            loadItem();
        }
    }
    //Funktion zum laden der Daten von den Input Feldern -> in globale Variablen 
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        task = formData.get("Task").toString();
        date = Number(formData.get("Date"));
        time = Number(formData.get("Time"));
        who = formData.get("Who").toString();
        comment = formData.get("Area").toString();
        //umwandlung nextTask von Input in string
        let nextTaskString = formData.get("Checkbox");
        if (nextTaskString == null) {
            nextTask = "";
        }
        else {
            nextTask = " do";
        }
        //generiere nun einen neuen Eintrag
        loadItem();
    }
    //Funktion zum Erstellen eines neuen Eintrags
    function loadItem() {
        //erstelle das div in dem task + datum + zeit + who + kommantar angezeigt wird 
        let newElement = document.createElement("div");
        newElement.innerHTML = date + " " + time + " " + task + " " + who + " " + comment + " " + nextTask;
        let getElement = document.querySelector("#output");
        getElement.appendChild(newElement);
        newElement.className = "outputItem";
        newElement.style.marginTop = "-10px";
        //erstelle neue Checkbox 
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "CheckboxName";
        getElement = document.querySelector("#output");
        getElement.appendChild(newCheckbox);
        newCheckbox.className = "checkbox";
        newCheckbox.id = "checkbox";
        newCheckbox.name = "Checkbox";
        //stylet erzeugte Elemente
        newCheckbox.style.position = "relative";
        newCheckbox.style.left = "-85px";
        newCheckbox.style.top = "-14px";
        //erstelle neues edit icon
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        getElement.appendChild(newEdit);
        newEdit.className = "edit";
        newEdit.id = "edit";
        //stylet erzeugte Elemente
        newEdit.style.position = "relative";
        newEdit.style.top = "-41px";
        newEdit.style.width = "20px";
        newEdit.style.left = "165px";
        //erstelle neues trash icon
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='" + "' " + "src='./trash-solid.svg'>";
        newElement.appendChild(newTrash);
        newTrash.className = "trash";
        //styled das erzeugte Element
        newTrash.style.width = "15px";
        newTrash.style.position = "relative";
        newTrash.style.left = "250px";
        newTrash.style.top = "7px";
        //listener
        document.querySelector(".trash").addEventListener("click", deleteItem);
        document.querySelector(".checkbox").addEventListener("click", checkboxNextTask);
        document.querySelector(".edit").addEventListener("click", editEntry);
    }
    //Funktion zum löschen eines Eintrags -> nimmt hier ID von dem jeweiligen Trash Element und löscht damit die zugehörigen Felder
    function deleteItem(_event) {
        console.log("delete");
        let x = _event.target.id;
        let outputElementId = document.getElementById(x);
        let editElementId = document.getElementById("edit" + x);
        let checkboxElementId = document.getElementById("checkbox" + x);
        checkboxElementId.remove();
        outputElementId.remove();
        editElementId.remove();
    }
    //Funktion zum überprüfen ob etwas erledigt wurde oder nicht (für die checkbox unten) <- Funktioniert noch nicht
    function checkboxNextTask(_event) {
        console.log("Checkbox Liste: Click -> checkboxNextTask()");
        //testing
        // let formData: FormData = new FormData(document.forms[0]);
        // let x: string = (_event.target as Element).id;
        // let nextTaskString: FormDataEntryValue = formData.get("Checkbox" + x);
        // console.log("nextP: " + nextTaskString);
        // let z = document.querySelector(".outputItem" + x).innerHTML;
        // document.querySelector(".outputItem" + x).innerHTML = z + " buy";
    }
    //Funktion zum editieren von Einträgen
    function editEntry() {
        console.log("Edit click -> editEntry()");
    }
})(todolistA04 || (todolistA04 = {}));
//# sourceMappingURL=A04_test_script.js.map