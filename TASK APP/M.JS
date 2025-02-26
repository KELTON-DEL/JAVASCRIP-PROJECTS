/*
const taskInput=document.getElementById('taskInput');
const addTaskBtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');

addTaskBtn.addEventListener('click',addTask);

function  addTask(params) {
  const tasktext=taskInput.value;

  if (tasktext=="") {
    alert('PLEASE INPUT TASK FIRST');
    
  } else {
    alert('task loaded succefully......');
    
       return;
  }
  
  
//create list item
  const li=document.createElement('li');
  li.textContent=tasktext;

  //create complete btn
  const completeButton=document.createElement('button');
  completeButton.textContent='complete';
  completeButton.addEventListener('click',()=>{
   li.classList.toggle('completed');
  });

  // create delete button
  const deletButton=document.createElement('button');
  deletButton.textContent='delet';
  deletButton.addEventListener('click',()=>{
   taskList.removeChild('li');
  });
  

li.appendChild(completButton);
taskList.appendChild('li');

//clear input
taskInput.value='';
}*/
// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    prompt("Please enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
li.appendChild(completeBtn);
  // Create delete button 
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });
  
const redoBtn=document.createElement("button");
redoBtn.textContent="redo";
 redoBtn.addEventListener("click",()=>{
  taskList.textContent="";
 });

  li.appendChild(deleteBtn);
                  
  // Add to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  
}

