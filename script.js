const correctPassword = "12072025"
const correctUser = "vocalista"

const messages = [
  "Eres mi canción favorita, vocalista 🎶",
  "Mi corazón late al ritmo de tu voz, vocalista ❤️",
  "No necesito un escenario, solo tu sonrisa, vocalista 🌸",
  "Eres mi verso más bonito, vocalista ✨",
  "En cada nota encuentro tu amor, vocalista 💕",
  "Tus ojos son mi melodía, vocalista 🎵",
  "Tu amor es mi mejor concierto, vocalista 🎤",
  "Cada día contigo es una nueva canción, vocalista 🎼",
  "Tu risa es mi sinfonía favorita, vocalista 🎹",
  "Eres la letra perfecta de mi corazón, vocalista 💝",
]

// Elegir mensajes aleatorios
const selectedMessages = []
while (selectedMessages.length < messages.length) {
  const random = messages[Math.floor(Math.random() * messages.length)]
  if (!selectedMessages.includes(random)) {
    selectedMessages.push(random)
  }
}

function login() {
  const user = document.getElementById("username").value.trim()
  const pass = document.getElementById("password").value.trim()
  const errorMsg = document.getElementById("error-message")

  if (user === correctUser && pass === correctPassword) {
    // Add fade out effect to login
    document.getElementById("login-container").style.opacity = "0"
    setTimeout(() => {
      document.getElementById("login-container").classList.add("hidden")
      document.getElementById("main-container").classList.remove("hidden")
      // Add fade in effect to main content
      document.getElementById("main-container").style.opacity = "0"
      setTimeout(() => {
        document.getElementById("main-container").style.opacity = "1"
      }, 100)
    }, 500)
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos 💔"
    // Add shake effect to login card
    const loginCard = document.querySelector(".login-card")
    loginCard.style.animation = "shake 0.5s ease-in-out"
    setTimeout(() => {
      loginCard.style.animation = ""
    }, 500)
  }
}

// Photo click functionality
const photo = document.getElementById("photo")
const messageDiv = document.getElementById("message")
let msgIndex = 0

photo.addEventListener("click", () => {
  messageDiv.style.transform = "scale(0.9)"
  messageDiv.style.opacity = "0.5"

  setTimeout(() => {
    messageDiv.textContent = selectedMessages[msgIndex]
    messageDiv.style.transform = "scale(1)"
    messageDiv.style.opacity = "1"
    msgIndex = (msgIndex + 1) % selectedMessages.length
  }, 200)
})

// Surprise functionality
function showSurprise() {
  const surpriseBtn = document.getElementById("surprise-btn")
  const surpriseContent = document.getElementById("surprise-content")

  surpriseBtn.style.transform = "scale(0.95)"
  setTimeout(() => {
    surpriseBtn.classList.add("hidden")
    surpriseContent.classList.remove("hidden")
    surpriseContent.style.opacity = "0"
    surpriseContent.style.transform = "translateY(20px)"

    setTimeout(() => {
      surpriseContent.style.opacity = "1"
      surpriseContent.style.transform = "translateY(0)"
    }, 100)
  }, 200)
}

// Add shake animation for login error
const style = document.createElement("style")
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`
document.head.appendChild(style)

// Add smooth transitions to main container
document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container")
  mainContainer.style.transition = "opacity 0.5s ease-in-out"
})

// Allow Enter key to login
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !document.getElementById("login-container").classList.contains("hidden")) {
    login()
  }
})
