document.addEventListener("DOMContentLoaded", function () {
    const number1Input = document.getElementById("number1");
    const number2Input = document.getElementById("number2");
    const calculateButton = document.getElementById("calculateButton");
    const sumResult = document.getElementById("sumResult");

    calculateButton.addEventListener("click", function () {
        const number1 = Number(number1Input.value);
        const number2 = Number(number2Input.value);

        if (!isNaN(number1) && !isNaN(number2)) {
            const sum = number1 + number2;
            sumResult.textContent = `${number1} + ${number2} = ${sum}`;
        } else {
            sumResult.textContent = "Invalid input. Please enter valid numbers.";
        }
    });
});
