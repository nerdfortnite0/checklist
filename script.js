// Sidebar open/close
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px';
  } else {
    sidebar.style.left = '0px';
  }
}

// Tabs switch
function openTab(tabName) {
  const tabs = document.getElementsByClassName('tab-content');
  for (let tab of tabs) {
    tab.style.display = 'none';
  }
  document.getElementById(tabName).style.display = 'block';
}

// Homework table add
function addHomework() {
  const table = document.getElementById('homework-table');
  const row = table.insertRow();
  row.innerHTML = `
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><button onclick="deleteRow(this)">🗑️ Delete</button></td>
  `;
}

// Schedule table add
function addSchedule() {
  const table = document.getElementById('schedule-table');
  const row = table.insertRow();
  row.innerHTML = `
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><button onclick="deleteRow(this)">🗑️ Delete</button></td>
  `;
}

// Delete table row
function deleteRow(btn) {
  btn.parentNode.parentNode.remove();
}

// Chatbox toggle
function toggleChat() {
  const chatBody = document.getElementById('chat-body');
  if (chatBody.style.display === 'none') {
    chatBody.style.display = 'block';
  } else {
    chatBody.style.display = 'none';
  }
}

// Sending AI message
function sendMessage() {
  const input = document.getElementById('chat-input');
  const chatBody = document.getElementById('chat-body');
  if (input.value.trim() !== '') {
    const userMessage = document.createElement('p');
    userMessage.textContent = "You: " + input.value;
    chatBody.appendChild(userMessage);

    const botMessage = document.createElement('p');
    botMessage.textContent = "🤖 Nerdy Me: I'll help you with that! 🍕";
    chatBody.appendChild(botMessage);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// Moving Pixel Background
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');
let pixels = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 100; i++) {
  pixels.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 2 + Math.random() * 3,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    color: Math.random() > 0.5 ? '#00f0ff' : '#ff8000'
  });
}

function drawPixels() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pixels) {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  }
  requestAnimationFrame(drawPixels);
}
drawPixels();
