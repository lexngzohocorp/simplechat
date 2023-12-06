function sendMessage() {
    var userInput = document.getElementById("userInput");
    var chatLog = document.getElementById("chatLog");

    var userMessage = userInput.value;
    if (userMessage.trim() === "") {
        return;
    }

    // Display user message in the chat log
    chatLog.innerHTML += "<div class='user-message'>" + userMessage + "</div>";

    // Simulate a simple chatbot response
    var botMessage = "I'm a simple chatbot! How can i help you today??";
    chatLog.innerHTML += "<div class='bot-message'>" + botMessage + "</div>";

    // Clear the user input field
    userInput.value = "";

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}
