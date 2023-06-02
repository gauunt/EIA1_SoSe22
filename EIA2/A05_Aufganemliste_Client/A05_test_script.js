/*
Aufgabe:L05_Aufgabenliste_Client
Name: Marie Walter
Matrikel: 271138
Datum: 22.04.2023
Quellen: EIA2 Videos, Abgabe letztes Semester
*/
var ToDoListA05;
(function (ToDoListA05) {
    window.addEventListener("load", handleLoad);
    //lädt Liste und ruft loadData auf
    async function handleLoad() {
        let button = document.querySelector("button[type=submit]");
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "data");
        let response = await fetch("https://webuser.hs-furtwangen.de/~waltermm/Database/index.php?" + query.toString());
        let entry = await response.text();
        let data = JSON.parse(entry);
        button.addEventListener("click", handleButton);
        // clearInputs();
        console.log(data.data);
        loadData(data.data);
    }
    //managed die Buttons
    function handleButton() {
        // loadInput();
        sendData();
    }
    //client austausch
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let json = {};
        //Umwandlung FormData in Json FormData
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "data");
        query.set("data", JSON.stringify(json));
        let response = await fetch("https://webuser.hs-furtwangen.de/~waltermm/Database/index.php?" + query.toString());
        console.log(response);
        console.log("data sent");
    }
    //lädt die Daten aus dem JSON Array in Variablen und gibt sie an loadtask weiter
    function loadData(data) {
        for (let index = 0; index < data.length; index++) {
            let task = data[index].task;
            let date = data[index].date;
            let time = data[index].time;
            let who = data[index].who;
            let comment = data[index].comment;
            let purchase = data[index].purchase;
            loadtask(task, date, time, who, comment, purchase);
        }
    }
    //lädt den Input in den Feldern in Variablen und übergibt es dann zur loadtask Funktion
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        let task = formData.get("task").toString();
        let date = new Date().toLocaleDateString();
        let time = getTime().toLocaleTimeString();
        let who = formData.get("who").toString();
        let comment = formData.get("Area").toString();
        //umwandlung nextPurchase von Input in string
        let purchaseCheckbox = formData.get("Checkbox");
        let purchase = "";
        console.log(purchaseCheckbox);
        if (purchaseCheckbox == null) {
            purchase = "";
        }
        else {
            purchase = " buy";
        }
        //löscht Value von Inputs
        // clearInputs();
        //generiere nun einen neuen Eintrag
        loadtask(task, date, time, who, comment, purchase);
    }
    //Funktion zur generierung eines task Felds im Output
    function loadtask(task, date, time, who, comment, purchase) {
        let newDiv = document.createElement("div");
        newDiv.id = "createDiv";
        let parent = document.querySelector("#output");
        newDiv.className = "genoutput";
        newDiv.innerHTML = date + " " + time + " " + task + " " + who + " " + comment + " " + purchase;
        parent.appendChild(newDiv);
        let newContainer = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newContainer.appendChild(newCheckbox);
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<img id='edit' src='./pen-solid.svg'>";
        newContainer.appendChild(newEdit);
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "trash";
        newContainer.appendChild(newTrash);
        newEdit.addEventListener("click", function () {
            edittask(newDiv, task, comment);
        });
        newTrash.addEventListener("click", function () {
            deletetask(newDiv);
        });
    }
    //löscht ein task bei click auf trash
    function deletetask(newDiv) {
        newDiv.parentElement.removeChild(newDiv);
    }
    //editiert ein task bei click auf edit
    function edittask(newDiv, task, comment) {
        let taskx = document.querySelector("input#inputx");
        taskx.value = task;
        let commentx = document.querySelector("input#commentx");
        commentx.value = comment;
        deletetask(newDiv);
    }
    //cleared die Input Felder
    // function clearInputs(): void {
    //     let taskx: HTMLInputElement = document.querySelector("input#inputx");
    //     taskx.value = "";
    //     let commentx: HTMLInputElement = document.querySelector("input#commentx");
    //     commentx.value = "";
    // }
})(ToDoListA05 || (ToDoListA05 = {}));
//# sourceMappingURL=A05_test_script.js.map