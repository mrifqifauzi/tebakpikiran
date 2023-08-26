// const taskInput = document.getElementById("taskInput");
// const addTaskButton = document.getElementById("addTaskButton");
// const taskList = document.getElementById("taskList");

// addTaskButton.addEventListener("click", addTask);

// function addTask() {
//   const taskText = taskInput.value;
//   if (taskText.trim() === "") return;

//   const taskItem = document.createElement("li");
//   taskItem.innerHTML = `
//     ${taskText}
//     <button class="deleteTaskButton">Delete</button>
//   `;

//   const deleteButton = taskItem.querySelector(".deleteTaskButton");
//   deleteButton.addEventListener("click", () => {
//     taskList.removeChild(taskItem);
//   });

//   taskList.appendChild(taskItem);
//   taskInput.value = "";
// }

// deklarasi variabel
const inputPassword = document.getElementById("input-password");
const  sandi = document.getElementById("sandi");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click",() => {
  const password = inputPassword.value;
  if (password.length >= 7){
    sandi.textContent = password;
    sandi.style.color = "green";

  } else {
    errorMessage.textContent = "Password Terlalu Pendek";
    errorMessage.style.color = "Red";

  }

});

