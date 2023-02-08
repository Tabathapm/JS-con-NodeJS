const express = require('express');

const Service = require('./src/service');

const app = express();
const PORT = 3000;

app.use(express.json());

//recibe la ruta y el controlador de esa ruta
/*req = request = peticion; res = response = respuesta */
app.get('/', (req, res) => {
    res.json({
        mensaje: "Lista de usuarios",
        body: Service.getUsers()
    });
});

// nuevo endpoint
app.post('/', (req, res) => {
    let {body: newUser} = req; // desestructuración de datos
    //let newUser = req.body;
    let userCreado = Service.crearUsuario(newUser);
    res.status(201).json({
        mensaje: 'Usuario creado',
        body: userCreado
    })
})

app.get("/:id", (req, res) => {

    // en 'params' van a estar todos los parametros de ruta que envie el cliente
    // todos los valores enviados son dd tipo String
    //let id = req.params.id;
    let {
        params:{id},
    } = req;
    let user = Service.getUser(id);
    res.json({
        mensaje: `Usuario ${id}`,
        body: user
    });
});

// -------- RESOLVER -----------
app.put('/:id', (req, res) => {
    let id   = req.params.id;
    let user = Service.getUser(id);

});

app.delete('/:id', (req, res) => {
    
})

// para recibir peticiones se debe levantar el servidor
// recibe un puerto y una func callback
app.listen(PORT, () => { //que escuche en el puerto 3000 y cuando levante nos notifique mediante el callback
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})