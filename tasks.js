const taskInput = document.querySelector("#task");
const form = document.querySelector("form");
const taskList = document.querySelector(".allTasks");

allEventListeners();

function allEventListeners() {
    document.querySelector("#taskSubmit").addEventListener("click", addTasksInternal);
    
    form.addEventListener("submit", addTask);

    taskList.addEventListener("click", removeTask);

    let deleteButton = [...document.querySelectorAll(".delete-item")];
    deleteButton.map
}

function addTask(e) {
    if (taskInput.value === ` `) {
        alert("add a task");
    }

        const li = document.createElement("li");
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(taskInput.value))

        const a = document.createElement("a");
        a.className = 'delete-item';
        a.innerHTML = ' <u>delete task</u> ';

        li.appendChild(a)
    
        taskList.append(li);

        e.preventDefault();
    }

function removeTask(e) {
    console.log("deleting....");
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
    let xhr = new XMLHttpRequest();
    let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
    let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
    let studentId = "3041245";
    let taskDescription = document.querySelector("#task").value;
    let params = {
        'StudentId': studentId,
        'Description': taskDescription
    };

    xhr.open("delete", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("x-api-key", apiKey);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log("deleted!");
            console.log(JSON.parse(xhr.responseText));
        }
    }

    xhr.send(JSON.stringify(params));
};

function addTasksInternal() {
    console.log("adding a new task...")

    let xhr = new XMLHttpRequest();
    let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
    let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
    let studentId = "3041245";
    let taskDescription = document.querySelector("#task").value;
    let params = {
        'StudentId': studentId,
        'Description': taskDescription
    };

    xhr.open("post", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("x-api-key", apiKey);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log("new record added!")
            console.log(JSON.parse(xhr.responseText));
        }
    }

    xhr.send(JSON.stringify(params));
};