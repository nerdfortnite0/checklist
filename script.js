// Auto-open sidebar
window.onload = () => {
  document.getElementById("sidebar").style.left = "0px";
};

// Switch Tabs
function openTab(tabName) {
  let tabs = document.getElementsByClassName("tab-content");
  for (let tab of tabs) {
    tab.style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  let buttons = document.querySelectorAll(".tabs button");
  buttons.forEach(btn => btn.classList.remove("active"));
  
  document.getElementById(tabName + "-btn").classList.add("active");
}

// Music Player
let music = new Audio('https://cdn.pixabay.com/audio/2022/03/24/audio_8b1db8f94d.mp3');
music.loop = true;
music.volume = 0.3;
music.play();

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Chat AI Toggle
function toggleChat() {
  const chatBody = document.getElementById('chat-body');
  if (chatBody.style.display === 'block') {
    chatBody.style.display = 'none';
  } else {
    chatBody.style.display = 'block';
  }
}

// Simple NerdyMe AI
function sendMessage(event) {
  if (event.key === 'Enter') {
    const input = event.target;
    const msg = input.value.trim();
    if (msg !== "") {
      const chatBody = document.getElementById('chat-body');
      const userMsg = document.createElement('div');
      userMsg.innerText = "You: " + msg;
      chatBody.appendChild(userMsg);

      const reply = document.createElement('div');
      reply.innerText = "NerdyMe AI: Keep going! You're doing great! 🍕🎮";
      chatBody.appendChild(reply);

      chatBody.scrollTop = chatBody.scrollHeight;
      input.value = '';
    }
  }
}

// Floating pizzas and controllers
const canvas = document.createElement('canvas');
canvas.id = 'pixelCanvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const icons = [];
const imgPizza = new Image();
const imgController = new Image();
imgPizza.src = 'https://i.imgur.com/nrEXH5A.png';
imgController.src = 'https://i.imgur.com/GvjE6d9.png';

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createIcons() {
  for (let i = 0; i < 20; i++) {
    icons.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.5 + Math.random(),
      img: Math.random() > 0.5 ? imgPizza : imgController,
      size: 30 + Math.random() * 30
    });
  }
}

function animateIcons() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let icon of icons) {
    ctx.drawImage(icon.img, icon.x, icon.y, icon.size, icon.size);
    icon.y += icon.speed;
    if (icon.y > canvas.height) {
      icon.y = -icon.size;
      icon.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateIcons);
}

imgPizza.onload = () => {
  imgController.onload = () => {
    createIcons();
    animateIcons();
  }
};
