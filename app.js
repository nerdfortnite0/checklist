// Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.left = (sidebar.style.left === "0px") ? "-200px" : "0px";
}

// Tabs
function switchTab(tab) {
  document.getElementById('schedule').style.display = 'none';
  document.getElementById('todo').style.display = 'none';
  document.getElementById(tab).style.display = 'block';
}

// Schedule
function addSchedule() {
  const time = prompt("Enter time:");
  const task = prompt("Enter task:");
  if (time && task) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${time} - ${task} <button onclick="this.parentNode.remove()">❌</button>`;
    document.getElementById("scheduleList").appendChild(div);
    saveData();
  }
}

// Todo
function addTodo() {
  const homework = prompt("Enter homework:");
  if (homework) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${homework} <button onclick="this.parentNode.remove()">❌</button>`;
    document.getElementById("todoList").appendChild(div);
    saveData();
  }
}

// Music
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  music.paused ? music.play() : music.pause();
}

// AI Helper
function talkAI() {
  alert("👾 Hello Nerd! You’re doing great. Remember to check your schedule!");
}

// Save Data
function saveData() {
  localStorage.setItem('scheduleList', document.getElementById('scheduleList').innerHTML);
  localStorage.setItem('todoList', document.getElementById('todoList').innerHTML);
}

// Load Data
window.onload = function() {
  if (localStorage.getItem('scheduleList')) {
    document.getElementById('scheduleList').innerHTML = localStorage.getItem('scheduleList');
  }
  if (localStorage.getItem('todoList')) {
    document.getElementById('todoList').innerHTML = localStorage.getItem('todoList');
  }
};

// Open School Links
function openSchoolLink(which) {
  if (which === 'lms') {
    window.open('https://lms.fcps.edu/home', '_blank');
  } else {
    window.open('https://sisstudent.fcps.edu/SVUE/PXP2_Login_Student_OVR.aspx?regenerateSessionId=true', '_blank');
  }
}
