/* 
--- se usan constantes al traer paquetes
--- porque al ser paquete no debe poder modificarse  
*/
// axios es asincrono
// rqr
const axios = require('axios');
const fs    = require('fs').promises;
const path  = require('path');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let { data : {results} } = response;

    let personajes = results.map((personaje) => {
        return{
            id       : personaje.id,
            nombre   : personaje.name,
            status   : personaje.status,
            especies : personaje.species
        };
    })
    .map((personaje) => Object.values(personaje).join(','))
    .join('\n');

    // Se crea un archivo con el nombre que le indiquemos;
    await fs.writeFile(path.join(__dirname, "data.csv"), personajes);


    // clg
    //console.log(personajes);

    // variable global: 
   // console.log(__dirname);
   // console.log(path.join(__dirname, "data.csv"));
};

main();