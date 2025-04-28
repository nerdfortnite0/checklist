const PASSWORD = "Wondimu911";

function checkPassword() {
  const input = document.getElementById('password-input').value;
  if (input === PASSWORD) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    alert("Wrong password!");
  }
}

function switchTab(tab) {
  document.getElementById('homework').style.display = (tab === 'homework') ? 'block' : 'none';
  document.getElementById('schedule').style.display = (tab === 'schedule') ? 'block' : 'none';
}

function addHomework() {
  const homeworkList = document.getElementById('homework-list');
  const div = document.createElement('div');
  div.innerHTML = `
    <input type="text" placeholder="Homework">
    <input type="date">
    <button onclick="this.parentNode.remove()">❌</button>
  `;
  homeworkList.appendChild(div);
}

function addSchedule() {
  const scheduleList = document.getElementById('schedule-list');
  const div = document.createElement('div');
  div.innerHTML = `
    <input type="time">
    <input type="text" placeholder="Activity">
    <button onclick="this.parentNode.remove()">❌</button>
  `;
  scheduleList.appendChild(div);
}
