document.addEventListener("DOMContentLoaded", function () {
    const messageElement = document.getElementById("message");
    const textInput = document.getElementById("textInput");
    const changeButton = document.getElementById("changeButton");

    changeButton.addEventListener("click", function () {
        const newMessage = textInput.value.trim();
        if (newMessage !== "") {
            messageElement.textContent = newMessage;
        } else {
            messageElement.textContent = "Hello, World!";
        }
    });
});
