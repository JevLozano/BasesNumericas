// Decimal a ...
const decimalABinario = (numero) =>  {
    if (numero === 0){
        return "0";
    }else if(numero > 0){

        let binario = "";
        while(numero>0){
            binario = (numero%2) + binario;
            numero= Math.floor(numero/2);
        }

        return binario;
    }else{
        console.log("Error")
    };

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
    }
}

//binario a ...

const binarioADecimal = (numero) => {
    const decimal =parseInt(numero,2);
    return decimal;
}

const binarioAHexadecimal = (numero) => {
    const decimal = binarioADecimal(numero);
    return decimalAHexadecimal(decimal); 
}

//hexadecimal a ...

const hexadecimalADecimal = (numero) => {
    const decimal = parseInt(numero,16);
    return decimal;
}

const hexadecimalABinario = (numero) => {
    const decimal = hexadecimalADecimal(numero);
    return decimalABinario(decimal); 
}


console.log(decimalABinario(99));
console.log(binarioADecimal("1100011"));
console.log(decimalAHexadecimal(99));
console.log(binarioAHexadecimal("1100011"));
console.log(hexadecimalADecimal("63"))
console.log(hexadecimalABinario("63"))