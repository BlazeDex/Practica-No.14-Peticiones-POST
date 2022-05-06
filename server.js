const express = require('express'); //Importando la dependencia a una variable.
let app = express(); //Declaramos la app de Express.
let PORT = process.env.PORT || 3000; //Asignando el puerto que escuchará las peticiones.
app.use('/assets', express.static(__dirname + '/public')); //Directorio virtual para contenido estático.

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); //Template de EJS

//Directorio raíz (nuestra primera ruta).
app.get('/',(req, res) => {
    res.send(`<!DOCTYPE html> <html lang="en"> <head> <link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    </p></body> </html>`);
});

/*Segundo directorio, el cual recibe el nombre de una persona, un mensaje y 
un parámetro para repetir el mensaje "n" veces.*/
app.get('/person/:id', (req, res) => {
    res.render('person', {NAME: req.params.id, Msg: req.query.message, Times: req.query.times});
});

app.get('/student', (req, res) => {
    res.render('index'); //Indicamos el archivo index.ejs al método render.
});

/*Establecemos los parámetros de envío para nuestro tercer directorio "student"*/
app.post('/student', (req, res) => {
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
});


app.listen(PORT); //Activamos el servidor.
