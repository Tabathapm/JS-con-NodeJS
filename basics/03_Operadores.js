// Operador de cadena o concatenacion (+)
let nombre   = 'Zoe';
let apellido = 'Wilson';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Operador condicional (condicion ? val1 : val2)
console.log(2 > 3 ? 'Es mayor': 'Es menor');

// Operador de desestructuracion
let persona = {
    nombre: 'Zoe',
    apellido: 'Wilson'
};

let { nombre: nuevoNombre2, apellido2 } = persona;
console.log(nuevoNombre);
console.log(apellido);
console.log(persona);

// Desestructuracion de arreglos
let arreglo = [1,2,3,4,5];
let [primeraPosicion, dos] = arreglo;
console.log(primeraPosicion);
console.log(dos);

// Operador de miembro o acceso de propiedad
/* Notacion punto  */
let persona1 = {
    nombre: 'Zoe',
    apellido: 'Wilson'
};

console.log(persona1.nombre);
console.log(persona1.apellido);

// Notacion por corchete
let persona2 = {
    nombre: 'Zoe',
    apellido: 'Wilson'
};

console.log(persona2['nombre']);
console.log(persona2['apellido']);

// Notacion por corchetes en arreglos
let arreglo1 = [21,22,23,24,25];
console.log(arreglo1[0]);

// Operacion de determinacion de tipo (typeof)
console.log(typeof 'Hola');
console.log(typeof 21);
console.log(typeof true);