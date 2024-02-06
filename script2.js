function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    
    if (message !== "") {
      var chatBox = document.getElementById("chat-box");
      var messageElement = document.createElement("div");
      messageElement.classList.add("message", "sent");
      messageElement.innerHTML = `
        <div class="message-content">
          <p>${message}</p>
          <span class="time">${getTime()}</span>
        </div>
      `;
      chatBox.appendChild(messageElement);
      
      // Clear input
      messageInput.value = "";
      
      // Scroll to bottom
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var time = hours + ':' + minutes + ' ' + ampm;
    return time;
  }
  