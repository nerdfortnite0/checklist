// Password
function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input === 'Wondimu911') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Wrong password!');
    }
}

// Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

// Tabs
function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

// Homework
function addHomework() {
    const homeworkList = document.getElementById('homework-list');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <input placeholder="Homework Title">
        <input type="date">
        <button onclick="this.parentElement.remove()">Done</button>
    `;
    homeworkList.appendChild(card);
}

// Schedule
function addSchedule() {
    const scheduleList = document.getElementById('schedule-list');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <input placeholder="Task">
        <input placeholder="Time">
        <button onclick="this.parentElement.remove()">Done</button>
    `;
    scheduleList.appendChild(card);
}

// Chatbot
function sendChat() {
    const chatInput = document.getElementById('chat-input').value;
    const chatWindow = document.getElementById('chat-window');
    if (chatInput.trim() === '') return;
    const userMessage = document.createElement('div');
    userMessage.textContent = "🧑: " + chatInput;
    chatWindow.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.textContent = "🤖: " + getBotResponse(chatInput);
    chatWindow.appendChild(botMessage);

    chatInput.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes('homework')) return "Don't forget to check your Homework tab!";
    if (input.includes('font')) return "Click 'Change Font' in the sidebar!";
    if (input.includes('music')) return "Click Play/Pause Music in the sidebar!";
    return "I'm here to help you, Nerdy Star! ⭐";
}

// Music
function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Font changer
function changeFont() {
    const fonts = ['Orbitron', 'Comic Neue', 'Pixelify Sans', 'Arial', 'Courier New'];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.body.style.fontFamily = randomFont;
}

// Sidebar links
function openLink(url) {
    window.open(url, '_blank');
}
