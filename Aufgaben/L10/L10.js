{
    let generalTaskID = 0;
    let arrayTasks = [];
    let activeCreationIndex;
    document.getElementById("newtodo").addEventListener("keyup", addTask);
    function addTask(key) {
        if (key.keyCode === 13) {
            createTaskObject();
            createNewLi();
            let activeLi = document.getElementById("task-nr: " + generalTaskID);
            createStatusButton(activeLi);
            createTaskContent(activeLi, arrayTasks[activeCreationIndex]);
            createTrashButton(activeLi);
            calculateNumberTasks();
            document.getElementById("newtodo").value = "";
            generalTaskID++;
        }
    }
    function createTaskObject() {
        let newTaskContent = document.getElementById("newtodo").value;
        let newTaskItem = {
            taskID: generalTaskID,
            status: true,
            content: newTaskContent
        };
        arrayTasks.push(newTaskItem);
        activeCreationIndex = arrayTasks.findIndex(function (array) {
            if (array.taskID == generalTaskID) {
                return true;
            }
        });
        console.log("ACI: " + activeCreationIndex);
        console.log("GTID: " + generalTaskID);
    }
    function createNewLi() {
        let newtask = document.createElement("li");
        newtask.setAttribute("id", String("task-nr: " + generalTaskID));
        newtask.classList.add("liContainer");
        let list = document.getElementById("tasklist");
        list.appendChild(newtask);
    }
    function createStatusButton(activeLi) {
        let newStatusDiv = document.createElement("div");
        newStatusDiv.classList.add("statusDiv");
        let newStatusButton = document.createElement("i");
        newStatusButton.setAttribute("id", String("statusButton-nr: " + generalTaskID));
        newStatusButton.classList.add("fa-regular");
        newStatusButton.classList.add("fa-circle");
        newStatusDiv.appendChild(newStatusButton);
        activeLi.appendChild(newStatusDiv);
        newStatusButton.addEventListener("click", triggerStatus);
    }
    function createTaskContent(activeLi, newTaskContent) {
        let newContent = document.createTextNode(newTaskContent.content);
        activeLi.appendChild(newContent);
    }
    function createTrashButton(activeLi) {
        let newTrashDiv = document.createElement("div");
        newTrashDiv.classList.add("trashDiv");
        let newTrashButton = document.createElement("i");
        newTrashButton.setAttribute("id", String("trashButton-nr: " + generalTaskID));
        newTrashButton.classList.add("fa-regular");
        newTrashButton.classList.add("fa-trash-can");
        newTrashDiv.appendChild(newTrashButton);
        activeLi.appendChild(newTrashDiv);
        newTrashButton.addEventListener("click", deleteTask);
    }
    function triggerStatus() {
        let currentButton = document.querySelector("i:hover");
        let activeElement = document.querySelector("i:hover").id;
        let activeIndex = activeElement.slice(17);
        let activeLi = document.getElementById("task-nr: " + activeIndex);
        let activeArrayIndex = arrayTasks.findIndex(function (array) {
            if (array.taskID == activeIndex) {
                return true;
            }
        });
        if (arrayTasks[activeArrayIndex].status == true) {
            currentButton.classList.add("fa-circle-check");
            currentButton.classList.remove("fa-circle");
            arrayTasks[activeArrayIndex].status = false;
            console.log(arrayTasks[activeArrayIndex]);
            activeLi.style.background = "#b0ffb4";
        }
        else {
            currentButton.classList.add("fa-circle");
            currentButton.classList.remove("fa-circle-check");
            arrayTasks[activeArrayIndex].status = true;
            console.log(arrayTasks[activeArrayIndex]);
            activeLi.style.background = "#ffe9ba";
        }
    }
    function deleteTask() {
        let activeElement = document.querySelector("i:hover").id;
        console.log(activeElement);
        let activeIndex = activeElement.slice(16);
        console.log(activeIndex);
        let tasktoDelete = document.getElementById("task-nr: " + activeIndex);
        tasktoDelete.remove();
        let activeArrayIndex = arrayTasks.findIndex(function (array) {
            if (array.taskID == activeIndex) {
                return true;
            }
        });
        arrayTasks.splice(activeArrayIndex, 1);
        calculateNumberTasks();
    }
    function calculateNumberTasks() {
        let numberTasks = arrayTasks.length;
        if (numberTasks == 0) {
            document.getElementById("numbertasks").innerText = String("Keine Aufgabe");
        }
        else if (numberTasks == 1)
            document.getElementById("numbertasks").innerText = String(numberTasks + " Aufgabe");
    }
    {
        document.getElementById("numbertasks").innerText = String(numberTasks + " Aufgaben");
    }
}
//# sourceMappingURL=L10.js.map