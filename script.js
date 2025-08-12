const correctPassword = "12072025";
const correctUser = "vocalista"; // Cambia esto por el usuario que quieras

const messages = [
  "Eres mi canción favorita, vocalista 🎶",
  "Mi corazón late al ritmo de tu voz, vocalista ❤️",
  "No necesito un escenario, solo tu sonrisa, vocalista 🌸",
  "Eres mi verso más bonito, vocalista ✨",
  "En cada nota encuentro tu amor, vocalista 💕",
  "Tus ojos son mi melodía, vocalista 🎵",
  "Tu amor es mi mejor concierto, vocalista 🎤"
];

// Elegir 5 mensajes aleatorios
let selectedMessages = [];
while (selectedMessages.length < 5) {
  let random = messages[Math.floor(Math.random() * messages.length)];
  if (!selectedMessages.includes(random)) {
    selectedMessages.push(random);
  }
}

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (user === correctUser && pass === correctPassword) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("main-container").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos 💔";
  }
}

const photo = document.getElementById("photo");
const messageDiv = document.getElementById("message");
let msgIndex = 0;

photo.addEventListener("click", () => {
  messageDiv.textContent = selectedMessages[msgIndex];
  msgIndex = (msgIndex + 1) % selectedMessages.length;
});
