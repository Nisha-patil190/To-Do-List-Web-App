const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// ✔ Add tasks
addBtn.addEventListener("click", addTask);

function addTask() 
{
    const taskText = taskInput.value.trim();

    if (taskText === "") 
    {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    // ✔ Mark complete (toggle)
    li.addEventListener("click", function (e) 
    {
 if (e.target.classList.contains("deleteBtn")) return;
        li.classList.toggle("completed");
    });

    // ✔ Remove tasks
    li.querySelector(".deleteBtn").addEventListener("click", function () 
    {
        li.remove();
    });

    // ✔ Dynamic UI (no reload)
    taskList.appendChild(li);

