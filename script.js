// Lock Screen
function unlock() {
  const password = document.getElementById('unlockPassword').value;
  if (password === "Wondimu911") {
    document.getElementById('lock-screen').style.display = "none";
    document.getElementById('bgMusic').muted = false;
  } else {
    alert("Wrong password! Try again.");
  }
}

// Loading Screen
window.onload = function() {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = "none";
  }, 2000);
};

// Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-240px";
  } else {
    sidebar.style.left = "0px";
  }
}

// Tabs
function openTab(tabName) {
  let tabs = document.getElementsByClassName("tabcontent");
  for (let tab of tabs) {
    tab.style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById('sidebar').style.left = "-240px";
}

// Homework
function addHomework() {
  const table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  const assignment = row.insertCell(0);
  const due = row.insertCell(1);
  const del = row.insertCell(2);

  assignment.innerHTML = `<input type="text" placeholder="Assignment">`;
  due.innerHTML = `<input type="date">`;
  del.innerHTML = `<button onclick="this.parentElement.parentElement.remove()">❌</button>`;
}

// Schedule
function addSchedule() {
  const table = document.getElementById('scheduleTable').getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  const time = row.insertCell(0);
  const activity = row.insertCell(1);
  const del = row.insertCell(2);

  time.innerHTML = `<input type="time">`;
  activity.innerHTML = `<input type="text" placeholder="Activity">`;
  del.innerHTML = `<button onclick="this.parentElement.parentElement.remove()">❌</button>`;
}

// Chatbot
function toggleChat() {
  const chat = document.getElementById('chat-window');
  chat.classList.toggle('hidden');
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (message) {
    let chatMessages = document.getElementById('chat-messages');
    const userMsg = document.createElement('div');
    userMsg.innerHTML = `<b>You:</b> ${message}`;
    chatMessages.appendChild(userMsg);

    const botReply = document.createElement('div');
    botReply.innerHTML = `<b>Nerdy AI:</b> ${generateReply(message)}`;
    chatMessages.appendChild(botReply);

    chatMessages.scrollTop = chatMessages.scrollHeight;
    input.value = "";
  }
}

function generateReply(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes("homework") || lower.includes("assignment")) {
    return "Don't forget to do your homework today! 📚";
  } else if (lower.includes("schedule") || lower.includes("time")) {
    return "Would you like me to help you organize your time? 🕒";
  } else if (lower.includes("music")) {
    return "Background music is playing! 🎵";
  } else if (lower.includes("school")) {
    return "Remember: Knowledge is power! 🧠";
  } else {
    return "You're doing amazing! 🚀 Keep it up!";
  }
}

// Google Login (simple simulation)
function googleLogin() {
  alert("Signing in... (Simulated)");
  document.getElementById('profileInfo').innerHTML = `
    <h2>Signed in as NerdyUser123@gmail.com</h2>
    <img src="https://i.ibb.co/3z8J5yN/profile-icon.png" width="80px">
  `;
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// Automatically open sidebar on load
window.addEventListener('DOMContentLoaded', () => {
  toggleSidebar();
  openTab('homework');
});
