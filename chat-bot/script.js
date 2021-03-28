const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const socket = io('http://localhost:3000')

socket.on('chat-message', data => {
    //  appendMessage(`${data.name}: ${data.message}`)
    console.log(data);
})
