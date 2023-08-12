document.addEventListener('DOMContentLoaded', function() {
    const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text"),
        addInputButton = document.getElementById('addInputButton'),
        numbersList = document.getElementById('numbersList'),
        output = document.getElementById('output');

    const inputNumber = document.getElementById('inputNumber');
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

            if (selectedOption === "Decimal a Binario" || selectedOption === "Binario a Decimal") {
                inputNumber.type = "number"; 
            } else if(selectedOption === "Hexadecimal a Decimal" || selectedOption === "Hexadecimal a Binario"){
                inputNumber.type = "text"; 
            }
        });
    });

    addInputButton.addEventListener("click", () => {
        const inputValue = inputNumber.value.trim();

        if (sBtn_text.innerText === "Decimal a Binario") {
            const decimalValue = parseInt(inputValue);
            if (!isNaN(decimalValue)) {
                inputNumbers.push(decimalABinario(decimalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de decimal a binario");
            }
        } else if (sBtn_text.innerText === "Binario a Decimal") {
            const binaryValue = inputValue.trim();
            if (/^[01]+$/.test(binaryValue)) {
                inputNumbers.push(binarioADecimal(binaryValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de binario a decimal");
            }
        } else if (sBtn_text.innerText === "Decimal a Octal") {
            const decimalValue = parseInt(inputValue);
            if (!isNaN(decimalValue)) {
                inputNumbers.push(decimalAOctal(decimalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de decimal a binario");
            }
        } else if (sBtn_text.innerText === "Octal a Decimal") {
            const octalValue = inputValue.trim();
            if (/^[0-7]+$/.test(octalValue)) {
                inputNumbers.push(octalADecimal(octalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de octal a decimal");
            }
        } else if (sBtn_text.innerText === "Decimal a Octal") {
            const decimalValue = parseInt(inputValue);
            if (!isNaN(decimalValue)) {
                inputNumbers.push(decimalAOctal(decimalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de decimal a binario");
            }
        } else if (sBtn_text.innerText === "Decimal a Hexadecimal") {
            const decimalValue = parseInt(inputValue);
            if (!isNaN(decimalValue)) {
                inputNumbers.push(decimalAHexadecimal(decimalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de decimal a binario");
            }
        } else if (sBtn_text.innerText === "Hexadecimal a Decimal") {
            const hexadecimalValue = inputValue.trim().toUpperCase(); 
            if (/^[0-9A-F]+$/.test(hexadecimalValue)) {
                inputNumbers.push(hexadecimalADecimal(hexadecimalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de hexadecimal a decimal");
            }
        } else if (sBtn_text.innerText === "Binario a Octal") {
            const binaryValue = inputValue.trim();
            if (/^[01]+$/.test(binaryValue)) {
                inputNumbers.push(binarioAOctal(binaryValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de binario a decimal");
            }
        } else if (sBtn_text.innerText === "Octal a Binario") {
            const octalValue = inputValue.trim();
            if (/^[0-7]+$/.test(octalValue)) {
                inputNumbers.push(octalABinario(octalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de octal a decimal");
            }
        } else if (sBtn_text.innerText === "Binario a Hexadecimal") {
            const binaryValue = inputValue.trim();
            if (/^[01]+$/.test(binaryValue)) {
                inputNumbers.push(binarioAHexadecimal(binaryValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de binario a decimal");
            }
        } else if (sBtn_text.innerText === "Hexadecimal a Binario") {
            const hexadecimalValue = inputValue.trim().toUpperCase(); 
            if (/^[0-9A-F]+$/.test(hexadecimalValue)) {
                inputNumbers.push(hexadecimalABinario(hexadecimalValue));
                updateNumbersList();
            } else {
                console.log("Entrada no válida para conversión de hexadecimal a decimal");
            }
        }

        inputNumber.value = '';
    });
    const hexadecimalABinario = (numero) => {
        return  decimalABinario(hexadecimalADecimal(numero));
    };
    const binarioAHexadecimal = (numero) => {
        return decimalAHexadecimal(binarioADecimal(numero));
    };
    
    const octalABinario =(numero) =>{
        return decimalABinario(octalADecimal(numero));
    };
    const binarioAOctal = (numero) => {
        return decimalAOctal(binarioADecimal(numero));
    };
    const decimalABinario = (numero) => {
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
    };

    const binarioADecimal = (binario) => {
        return parseInt(binario, 2);
    };

    const decimalAOctal = (numero) =>{

        if(numero === 0){
            return "0"
        }else if(numero > 0){
            let octal = "";
    
            while (numero > 0){
                const residuo = numero % 8;
                octal = residuo + octal;
                numero = Math.floor(numero/8);
            }
    
            return octal;
        }else{
            console.log("Error");
        };
    };
    const octalADecimal = (numero) =>{
        const decimal = parseInt(numero,8);
        return decimal;
    };
    function updateNumbersList() {
        numbersList.textContent = inputNumbers.join(', ');
    }
    const decimalAHexadecimal = (numero) => {
        if(numero === 0){
            return "0";
        }else if(numero > 0){
            let hexadecimal = "";
            const digitosHexa = "0123456789ABCDEF";
    
            while (numero > 0) {
                const residuo = numero % 16;
                hexadecimal = digitosHexa[residuo] + hexadecimal;
                numero = Math.floor(numero / 16);
                
            }
    
            return hexadecimal;
    
        }else{
            console.log("Error")
        };
    };
    const hexadecimalADecimal = (numero) => {
        const decimal = parseInt(numero,16);
        return decimal;
    };
    function updateNumbersList() {
        const selectedOption = sBtn_text.innerText;
    
        
        const conversionMessage = "La conversión " + selectedOption.toLowerCase() + ":";
        const numbersList = inputNumbers.join(', ');
    
        
        output.textContent = conversionMessage;
    
       
        const numbersContainer = document.querySelector(".numbers-container");
        numbersContainer.style.display = "flex"; 
    
        const numbersListSpan = numbersContainer.querySelector("#numbersList");
        numbersListSpan.textContent = numbersList;
    }
 
});

