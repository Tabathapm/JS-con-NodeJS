// ------ MAP ------
let estudiantes = ["Jodie", "Fran", "Jennifer"];
let asistencias = estudiantes.map((nombre) => {
    return {
        nombre     : nombre,
        asistencia : false
    }
});
console.log(estudiantes);
console.log("-------------------");
console.log(asistencias);

let productos = [
    {nombre : "remera",   precio : 10},
    {nombre : "pantalon", precio : 15},
    {nombre : "buzo",     precio : 25}
];

let productosImpuestos = productos.map((producto) => {
    //producto.impuesto = 50;
    //return producto;
    return{
        ...producto,
        impuesto : 50
    }
});

console.log(productos);
console.log("-------------------------------------------------------");
console.log(productosImpuestos);
console.log("-------------------------------------------------------");
console.log(productos);

// ----- 