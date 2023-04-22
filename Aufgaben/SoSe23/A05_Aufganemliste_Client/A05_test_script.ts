/*
Aufgabe:L04_Aufgabenliste_Formular
Name: Marie Walter
Matrikel: 271138
Datum: 22.04.2023
Quellen: EIA2 Videos, Abgabe letztes Semester
*/

namespace ToDoListA05 {

    window.addEventListener("load", handleLoad);

    //interface für die Daten in der JSON File
    export interface Input {
        task: string;
        comment: string;
        date: string;
        time: string;
        who: string;
        purchase: string;
    }

    interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
    }


    //lädt Liste und ruft loadData auf
    async function handleLoad(): Promise<void> {
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=submit]");
        let response: Response = await fetch("data.json");
        let entry: string = await response.text();
        let data: Input[] = JSON.parse(entry);
        button.addEventListener("click", handleButton);
        // clearInputs();
        loadData(data);
    }

    //managed die Buttons
    function handleButton(): void {
        loadInput();
        sendData();
    }

    //client austausch
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let json: FormDataJSON = {};

        //Umwandlung FormData in Json FormData
        for (let key of formData.keys())
        if (!json[key]) {
            let values: FormDataEntryValue[] = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
        }


        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "data");
        query.set("data", JSON.stringify(json));    
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~aberleba/Database/index.php?" + query.toString());
        console.log(response);
        console.log("data sent");
    }

    //lädt die Daten aus dem JSON Array in Variablen und gibt sie an loadtask weiter
    function loadData(data: Input[]): void {
        for (let index: number = 0; index < data.length; index++) {
            let task: string = data[index].task;
            let date: string = data[index].date;
            let time: string = data[index].time;
            let who: string = data[index].who;
            let comment: string = data[index].comment;
            let purchase: string = data[index].purchase;

            loadtask(task, date, time, who, comment, purchase);
        }
    }

    //lädt den Input in den Feldern in Variablen und übergibt es dann zur loadtask Funktion
    function loadInput(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let task: string = formData.get("task").toString();
        let date: string = new Date().toLocaleDateString();
        let time: string = new Time().toLocaleTimeString();
        let who: string = formData.get("who").toString();
        let comment: string = formData.get("Area").toString();

        //umwandlung nextPurchase von Input in string
        let purchaseCheckbox: FormDataEntryValue = formData.get("Checkbox");
        let purchase: string = "";
        console.log(purchaseCheckbox);
        if (purchaseCheckbox == null) {
            purchase = "";
        } else {
            purchase = " buy";
        }

        //löscht Value von Inputs
        // clearInputs();

        //generiere nun einen neuen Eintrag
        loadtask(task, date, time, who, comment, purchase);
    }

    //Funktion zur generierung eines task Felds im Output
    function loadtask(task: string, date: string, time: string, who: string, comment: string, purchase: string): void {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "createDiv";
        let parent: Element = document.querySelector("#output");
        newDiv.className = "genoutput";
        newDiv.innerHTML = date + " " + time + " " + task + " " + who + " " + comment + " " + purchase;
        parent.appendChild(newDiv);

        let newContainer: HTMLDivElement = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);

        let newCheckbox: HTMLInputElement = document.createElement("input");
        newCheckbox.type = "checkbox";
        newContainer.appendChild(newCheckbox);

        let newEdit: HTMLDivElement = document.createElement("div");
        newEdit.innerHTML = "<img id='edit' src='./pen-solid.svg'>";
        newContainer.appendChild(newEdit);

        let newTrash: HTMLDivElement = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "trash";
        newContainer.appendChild(newTrash);

        newEdit.addEventListener("click", function (): void {
            edittask(newDiv, task, comment);
        });

        newTrash.addEventListener("click", function (): void {
            deletetask(newDiv);
        });
    }

    //löscht ein task bei click auf trash
    function deletetask(newDiv: HTMLDivElement): void {
        newDiv.parentElement.removeChild(newDiv);
    }

    //editiert ein task bei click auf edit
    function edittask(newDiv: HTMLDivElement, task: string, comment: string): void {
        let taskx: HTMLInputElement = document.querySelector("input#inputx");
        taskx.value = task;
        let commentx: HTMLInputElement = document.querySelector("input#commentx");
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
}