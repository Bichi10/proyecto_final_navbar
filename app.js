const express = require("express");
const app = express();
const hbs = require ('hbs');
const router = require('./router/router');
const notas = require ('./views/alumnos.hbs');
const SMTPPool = require("nodemailer/lib/smtp-pool");
const port = 4000;

//Handlebars

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials")

//middleware
app.use("/assets", express.static(__dirname + "./public"));
app.use(express.urlencoded({extended: false}));


//Configurar Express para procesar datos en formato JSON
app.use(express.json());

// Configurar Express para procesar datos de formulario
app.use(express.urlencoded({ extended: false }));

//ubicacion de rutas estaticas
app.use(express.static("public"))

// pagina de home o raiz
app.get("/", (req, res) => {
  res.render('home',{
    nombre: 'Notas',
    titulo: 'Aplicacion colegio'
  })
});

// breve reseña de la app
app.get("/usoapp", (req, res) => {
  res.render('usoapp',{
    nombre: 'Mauri',
    titulo: 'uso de la aplicacion '
  })
});


app.get("/Contacto", (req, res) => {
  res.render('contacto')
});

app.get("/formulario", (req, res) => {
  res.sendFile(__dirname +"/public/formulario.html")
});


//
app.get("/alumnos", router);
  /*app.get("/alumnos", (req, res) => {
    res.render('alumnos')
  });*/

app.get("/colegios", (req, res) => {
  res.render('colegio')
});

app.post('/usuario',(req, res)=>{
  const nombre = req.body.nombre;
  const correo = req.body.correo;

  console.log('Datos formulario: ', nombre, correo);

  res.send('Datos recibidos');

})

/* 
    app.get("/", function (req, res) {
    res.send("Hello World con express");
    });

    app.get("/contacto", function (req, res) {
    res.sendFile(__dirname + "/public/contacto.html");
    });

    app.get("*", function (req, res) {
        res.send("ERROR 404");
      });
*/
    app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
    });
