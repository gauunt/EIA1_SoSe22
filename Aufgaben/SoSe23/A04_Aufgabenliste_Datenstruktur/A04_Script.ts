/*
Aufgabe:L04_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 15.04.2023
Quellen: Abgabe letztes Semester
*/

namespace todolistA04 {

    //globale Variablen
    let task: string;
    let date: number;
    let time: number;
    let who: string;
    let comment: string;
    let nextTask: string;

    //onload window Listener
    window.addEventListener("load", loadList);

    //lädt Liste und ruft loadData auf
    function loadList(): void {
        document.querySelector("h2").addEventListener("click", loadInput);
        loadData();
    }

    //lädt die Daten aus der data.ts in globale Variablen 
    function loadData(): void {
        for (let counter: number = 0; counter < savedInputs.length; counter++) {
            task = savedInputs[counter].savedItem;
            date = savedInputs[counter].savedDate;
            time = savedInputs[counter].savedTime;
            who = savedInputs[counter].savedWho;
            comment = savedInputs[counter].savedComment;

            //umwandlung nextTask von boolean in string
            let nextTaskString: string = savedInputs[counter].savedPurchase.toString();
            if (nextTaskString == "false") {
                nextTask = "";
            } else {
                nextTask = " buy";
            }
            //generiere nun einen neuen Eintrag in der Liste 
            loadItem();
        }

    }

    //Funktion zum laden der Daten von den Input Feldern -> in globale Variablen 
    function loadInput(): void {

        let formData: FormData = new FormData(document.forms[0]);

        task = formData.get("Task").toString();
        date = Number(formData.get("Date"));
        time = Number(formData.get("Time"));
        who = formData.get("Who").toString();
        comment = formData.get("Area").toString();

        //umwandlung nextTask von Input in string
        let nextTaskString: FormDataEntryValue = formData.get("Checkbox");

        if (nextTaskString == null) {
            nextTask = "";
        } else {
            nextTask = " do";
        }
        //generiere nun einen neuen Eintrag
        loadItem();
    }

    //Funktion zum Erstellen eines neuen Eintrags
    function loadItem(): void {

        //erstelle das div in dem task + datum + zeit + who + kommantar angezeigt wird 
        let newElement: HTMLDivElement = document.createElement("div");
        newElement.innerHTML = date + " " + time + " " + task + " " + who + " " + comment + " " + nextTask;
        let getElement: HTMLElement = document.querySelector("#output");
        getElement.appendChild(newElement);
        newElement.className = "outputItem" + amountItems;
        newElement.id = amountItems.toString();
        newElement.style.marginTop = "-10px";

        //erstelle neue Checkbox 
        let newCheckbox: HTMLInputElement = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "CheckboxName" + amountItems;
        getElement = document.querySelector("#output");
        getElement.appendChild(newCheckbox);
        newCheckbox.className = "checkbox" + amountItems;
        newCheckbox.id = "checkbox" + amountItems.toString();
        newCheckbox.name = "Checkbox" + amountItems.toString();
        //stylet erzeugte Elemente
        newCheckbox.style.position = "relative";
        newCheckbox.style.left = "-85px";
        newCheckbox.style.top = "-14px";


        //erstelle neues edit icon
        let newEdit: HTMLDivElement = document.createElement("div");
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        getElement.appendChild(newEdit);
        newEdit.className = "edit" + amountItems;
        newEdit.id = "edit" + amountItems.toString();
        //stylet erzeugte Elemente
        newEdit.style.position = "relative";
        newEdit.style.top = "-41px";
        newEdit.style.width = "20px";
        newEdit.style.left = "165px";

        //erstelle neues trash icon
        let newTrash: HTMLDivElement = document.createElement("div");
        newTrash.innerHTML = "<img id='" + amountItems + "' " + "src='./trash-solid.svg'>";
        newElement.appendChild(newTrash);
        newTrash.className = "trash" + amountItems;
        //styled das erzeugte Element
        newTrash.style.width = "15px";
        newTrash.style.position = "relative";
        newTrash.style.left = "250px";
        newTrash.style.top = "7px";
   
        //listener
        document.querySelector(".trash" + amountItems).addEventListener("click", deleteItem);
        document.querySelector(".checkbox" +  amountItems).addEventListener("click", checkboxNextTask);
        document.querySelector(".edit" +  amountItems).addEventListener("click", editEntry);
    }

    //Funktion zum löschen eines Eintrags -> nimmt hier ID von dem jeweiligen Trash Element und löscht damit die zugehörigen Felder
    function deleteItem(_event: MouseEvent): void {
        console.log("delete");
        let x: string = (_event.target as Element).id;
        let outputElementId: HTMLElement = document.getElementById(x);
        let editElementId: HTMLElement = document.getElementById("edit" + x);
        let checkboxElementId: HTMLElement = document.getElementById("checkbox" + x);
        checkboxElementId.remove();
        outputElementId.remove();
        editElementId.remove();
    }

    //Funktion zum überprüfen ob etwas erledigt wurde oder nicht (für die checkbox unten) <- Funktioniert noch nicht
    function checkboxNextTask(_event: MouseEvent): void {
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
    function editEntry(): void {
        console.log("Edit click -> editEntry()");
    }
}