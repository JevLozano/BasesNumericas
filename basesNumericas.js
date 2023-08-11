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

};

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

//binario a ...

const binarioADecimal = (numero) => {
    const decimal =parseInt(numero,2);
    return decimal;
};

const binarioAHexadecimal = (numero) => {
    return decimalAHexadecimal(binarioADecimal(numero));
};

const binarioAOctal = (numero) => {
    return decimalAOctal(binarioADecimal(numero));
};

//hexadecimal a ...

const hexadecimalADecimal = (numero) => {
    const decimal = parseInt(numero,16);
    return decimal;
};

const hexadecimalABinario = (numero) => {
    return  decimalABinario(hexadecimalADecimal(numero));
};

const hexadeciamlAOctal = (numero) => {
    return decimalAOctal(hexadecimalADecimal(numero));
};

// octal a...

const octalADecimal = (numero) =>{
    const decimal = parseInt(numero,8);
    return decimal;
};

const octalABinario =(numero) =>{
    return decimalABinario(octalADecimal(numero));
};

const octalAHexadecimal = (numero) =>{
    return decimalAHexadecimal(octalADecimal(numero));
};

console.log(decimalABinario(99));
console.log(decimalAHexadecimal(99));
console.log(decimalAOctal(99))
console.log(binarioADecimal("1100011"));
console.log(binarioAHexadecimal("1100011"));
console.log(binarioAOctal("1100011"));
console.log(hexadecimalADecimal(63));
console.log(hexadecimalABinario(63));
console.log(hexadeciamlAOctal(63));
console.log(octalADecimal(143));
console.log(octalABinario(143));
console.log(octalAHexadecimal(143));