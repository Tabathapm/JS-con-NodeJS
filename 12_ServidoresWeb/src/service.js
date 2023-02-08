// se encarga de manipular todos los datos en cuanto a CRUD

const data = require('./MOCK_DATA.json'); // Ctrl + Shif + h = para buscar mejor las rutas

// se puede usar en cualquier lado
module.exports = {
    getUsers : () => data,
    getUser : (id) => {
        let identificador = Number(id);
        let user = data.filter((persona) => persona.id === identificador)[0];

        return user;
    },
    crearUsuario: (dataUser) => {
        let newUser = {
            id: data.length + 1,
            ...dataUser
        }
        data.push(newUser);

        return newUser;
    }
};