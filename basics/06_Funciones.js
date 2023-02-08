function saludar(){
    console.log('Hola');
}

saludar();

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar('Zoe');

function saludar(nombre){
    return `Hola ${nombre}`
}
let saludo = saludar('Pepe');
console.log(saludo);
console.log(saludar('Pepito'));

// Expresion
let suma = function(a, b){
    return a + b;
}

console.log('La suma es: ' + suma(10,50));

// Arrow function
let restar = (a, b) => {
    return a - b;
}

console.log('La resta es: ' + restar(50,10));

let multiplicar = (a, b) => a * b; 
console.log('La multiplicacion es: ' + multiplicar(2,10));