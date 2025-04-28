// Loading Screen
window.onload = function() {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
  }, 2000);
};

// Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
}

// Tabs
function openTab(tabName) {
  document.querySelectorAll('.tabcontent').forEach(tab => tab.style.display = 'none');
  document.getElementById(tabName).style.display = 'block';
}

// Open links
function openLink(url) {
  window.open(url, '_blank');
}

// Add Homework
function addHomework() {
  const table = document.getElementById('homeworkTable').getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  const assignmentCell = row.insertCell(0);
  const dateCell = row.insertCell(1);
  const actionsCell = row.insertCell(2);

  assignmentCell.innerHTML = `<input type="text" placeholder="Assignment">`;
  dateCell.innerHTML = `<input type="date">`;
  actionsCell.innerHTML = `<button onclick="deleteRow(this)">❌</button>`;
}

// Add Schedule
function addSchedule() {
  const table = document.getElementById('scheduleTable').getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  const timeCell = row.insertCell(0);
  const activityCell = row.insertCell(1);
  const actionsCell = row.insertCell(2);

  timeCell.innerHTML = `<input type="time">`;
  activityCell.innerHTML = `<input type="text" placeholder="Activity">`;
  actionsCell.innerHTML = `<button onclick="deleteRow(this)">❌</button>`;
}

// Delete Row
function deleteRow(btn) {
  btn.parentNode.parentNode.remove();
}

// Theme Switch
function toggleTheme() {
  document.body.classList.toggle('light');
}

// Font Picker
function changeFont(font) {
  document.body.style.fontFamily = font;
}

// Chatbot
function toggleChat() {
  document.getElementById('chat-window').classList.toggle('hidden');
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (msg === '') return;

  const chat = document.getElementById('chat-messages');
  const userMsg = document.createElement('div');
  userMsg.innerText = "You: " + msg;
  chat.appendChild(userMsg);

  const botMsg = document.createElement('div');
  if (msg.toLowerCase().includes('homework') || msg.toLowerCase().includes('assignment')) {
    botMsg.innerText = "🤖 Add your homework by clicking ➕ in Homework tab!";
  } else if (msg.toLowerCase().includes('schedule') || msg.toLowerCase().includes('plan')) {
    botMsg.innerText = "🤖 You can add your activities in Schedule tab!";
  } else {
    botMsg.innerText = "🤖 I'm here to help! Try asking about homework or schedule.";
  }
  chat.appendChild(botMsg);

  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}
