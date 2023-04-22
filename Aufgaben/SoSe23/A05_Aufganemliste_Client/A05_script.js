/*
Aufgabe:L04_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 22.04.2023
Quellen: letztes Semester
*/
var todolistA05;
(function (todolistA05) {
    //onload window Listener
    window.addEventListener("load", loadList);
    //lädt Liste und ruft loadData auf
    async function loadList() {
        document.querySelector("h2[type=submit]").addEventListener("click", loadInput);
        loadData();
        let response = await fetch("A05_data.json");
        let content = await response.text();
        let data = JSON.parse(content);
    }
    //lädt die Daten aus der data.ts in globale Variablen 
    function loadData() {
        for (let counter = 0; counter < savedInputs.length; counter++) {
            task = savedInputs[counter].savedTask;
            date = savedInputs[counter].savedDate;
            time = savedInputs[counter].savedTime;
            who = savedInputs[counter].savedWho;
            comment = savedInputs[counter].savedComment;
            //umwandlung nextTask von boolean in string
            let nextTaskString = savedInputs[counter].savedTask.toString();
            if (nextTaskString == "false") {
                nextTask = "";
            }
            else {
                nextTask = " do";
            }
            //generiere nun einen neuen Eintrag in der Liste 
            loadTask();
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
        loadTask();
    }
    //Funktion zum Erstellen eines neuen Eintrags
    function loadTask() {
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
        document.querySelector(".trash").addEventListener("click", deleteTask);
        document.querySelector(".checkbox").addEventListener("click", checkboxNextTask);
        document.querySelector(".edit").addEventListener("click", editEntry);
    }
    //Funktion zum löschen eines Eintrags -> nimmt hier ID von dem jeweiligen Trash Element und löscht damit die zugehörigen Felder
    function deleteTask(_event) {
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
})(todolistA05 || (todolistA05 = {}));
//# sourceMappingURL=A05_script.js.map