function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;

  appendMessage('user', text);
  input.value = '';

  // Add "Sophia is thinking..." animation
  const thinkingDiv = document.createElement('div');
  thinkingDiv.id = 'thinking';
  thinkingDiv.textContent = 'Sophia is thinking...';
  chat.appendChild(thinkingDiv);
  chat.scrollTop = chat.scrollHeight;

  setAvatar('thinking');

  // Wait 1.5 seconds, then remove thinking and respond
  setTimeout(() => {
    chat.removeChild(thinkingDiv);
    getBotResponse(text).then(response => {
      appendMessage('bot', response, true);
    });
  }, 1500); // Delay in ms (can be random between 1000–2000 if you want)
}
