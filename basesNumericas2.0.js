document.addEventListener('DOMContentLoaded', function() {
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");
    const addInputButton = document.getElementById('addInputButton');
    const inputNumber = document.getElementById('inputNumber');
    const numbersList = document.getElementById('numbersList');
    const output = document.getElementById('output');
    const inputNumbers = [];

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

    options.forEach(option => {
        option.addEventListener("click", () => {
            const selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");

            inputNumbers.length = 0;
            inputNumber.value = '';
            numbersList.textContent = '';
            output.textContent = '';

            if (["Decimal a Binario", "Binario a Decimal"].includes(selectedOption)) {
                inputNumber.type = "number"; 
            } else if (["Hexadecimal a Decimal", "Hexadecimal a Binario", "Hexadecimal a Octal"].includes(selectedOption)){
                inputNumber.type = "text"; 
            }
        });
    });

    addInputButton.addEventListener("click", () => {
        const inputValue = inputNumber.value.trim();
        let result = '';
        let isValidInput = true;

        if (/^[0-9A-Fa-f]+$/.test(inputValue)) {
            switch (sBtn_text.innerText) {
                case "Decimal a Binario":
                    result = decimalABinario(parseInt(inputValue));
                    break;
                case "Binario a Decimal":
                    if (/^[01]+$/.test(inputValue)) {
                        result = binarioADecimal(inputValue).toString();
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Decimal a Octal":
                    result = decimalAOctal(parseInt(inputValue));
                    break;
                case "Octal a Decimal":
                    if (/^[0-7]+$/.test(inputValue)) {
                        result = octalADecimal(inputValue).toString();
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Decimal a Hexadecimal":
                    result = decimalAHexadecimal(parseInt(inputValue));
                    break;
                case "Hexadecimal a Decimal":
                    if (/^[0-9A-Fa-f]+$/.test(inputValue)) {
                        result = hexadecimalADecimal(inputValue).toString();
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Binario a Octal":
                    if (/^[01]+$/.test(inputValue)) {
                        result = binarioAOctal(inputValue);
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Octal a Binario":
                    if (/^[0-7]+$/.test(inputValue)) {
                        result = octalABinario(inputValue);
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Binario a Hexadecimal":
                    if (/^[01]+$/.test(inputValue)) {
                        result = binarioAHexadecimal(inputValue);
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Hexadecimal a Binario":
                    if (/^[0-9A-Fa-f]+$/.test(inputValue)) {
                        result = hexadecimalABinario(inputValue);
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Octal a Hexadecimal":
                    if (/^[0-7]+$/.test(inputValue)) {
                        result = octalAHexadecimal(inputValue);
                    } else {
                        isValidInput = false;
                    }
                    break;
                case "Hexadecimal a Octal":
                    if (/^[0-9A-Fa-f]+$/.test(inputValue)) {
                        result = hexadecimalAOctal(inputValue);
                    } else {
                        isValidInput = false;
                    }
                    break;
            }

            if (isValidInput) {
                inputNumbers.push(result);
                updateNumbersList();
            } else {
                alert("Entrada no válida para la conversión");
            }
        } else {
            alert("Entrada no válida (solo se permiten números y letras para hexadecimal)");
        }

        inputNumber.value = '';
    });

    function updateNumbersList() {
        numbersList.textContent = inputNumbers.join(', ');
    }

    function decimalABinario(numero) {
        if (numero === 0){
            return "0";
        } else if(numero > 0){
            let binario = "";
            while(numero > 0){
                binario = (numero % 2) + binario;
                numero = Math.floor(numero / 2);
            }
            return binario;
        } else {
            console.log("Error");
        }
    }

    function binarioADecimal(binario) {
        return parseInt(binario, 2);
    }

    function decimalAOctal(numero) {
        if (numero === 0){
            return "0";
        } else if(numero > 0){
            let octal = "";
            while (numero > 0){
                const residuo = numero % 8;
                octal = residuo + octal;
                numero = Math.floor(numero / 8);
            }
            return octal;
        } else {
            console.log("Error");
        }
    }

    function octalADecimal(numero) {
        return parseInt(numero, 8);
    }

    function decimalAHexadecimal(numero) {
        if(numero === 0){
            return "0";
        } else if(numero > 0){
            let hexadecimal = "";
            const digitosHexa = "0123456789ABCDEF";

            while (numero > 0) {
                const residuo = numero % 16;
                hexadecimal = digitosHexa[residuo] + hexadecimal;
                numero = Math.floor(numero / 16);
            }

            return hexadecimal;

        } else {
            console.log("Error");
        }
    }

    function hexadecimalADecimal(numero) {
        return parseInt(numero, 16);
    }

    function binarioAOctal(binario) {
        const decimal = binarioADecimal(binario);
        return decimalAOctal(decimal);
    }

    function octalABinario(octal) {
        const decimal = octalADecimal(octal);
        return decimalABinario(decimal);
    }

    function binarioAHexadecimal(binario) {
        const decimal = binarioADecimal(binario);
        return decimalAHexadecimal(decimal);
    }

    function hexadecimalABinario(hexadecimal) {
        const decimal = hexadecimalADecimal(hexadecimal);
        return decimalABinario(decimal);
    }

    function octalAHexadecimal(octal) {
        const decimal = octalADecimal(octal);
        return decimalAHexadecimal(decimal);
    }

    function hexadecimalAOctal(hexadecimal) {
        const decimal = hexadecimalADecimal(hexadecimal);
        return decimalAOctal(decimal);
    }

    function updateNumbersList() {
        const selectedOption = sBtn_text.innerText;
        const conversionMessage = `La conversión ${selectedOption.toLowerCase()}:`;
        const numbersList = inputNumbers.join(', ');

        output.textContent = conversionMessage;

        const numbersContainer = document.querySelector(".numbers-container");
        numbersContainer.style.display = "flex";

        const numbersListSpan = numbersContainer.querySelector("#numbersList");
        numbersListSpan.textContent = numbersList;
    }
});

