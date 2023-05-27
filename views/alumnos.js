const express = require('express');
//const nodemailer = require('nodemailer');

const router = express.Router();


router.get('/',(req, res) => {
    res.render("alumnos")
});

const mysql = require ('mysql');

// Conexión a base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'edu_fisica'
    })
    
    conn.connect((err) => {
        if (err) throw err;
        console.log('Conexión establecida...')
    });
    
    
        //RUTAS
    // SELECT 
    router.get('/', (req, res) => {
        let sql = "SELECT * FROM alumno, colegio, curso where alumno.id_co = colegio.id_co and alumno.id_cu = curso.id_cu order by id_alumno";
        let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('alumnos', {
            results: results
        });
        });
    });
/*
    // Insertar 
    router.post('/save', (req, res) => {
        let data = { nombre: req.body.nombre, 
            apellido: req.body.apellido, 
            dni: req.body.dni, 
            id_co: req.body.colegio, 
            año: req.body.año, 
            turno:req.body.turno 
        };
        let sql = "INSERT INTO alumno, colegio, curso SET ?";
        let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/');
        });
    });
    
    
    //UPDATE
    router.post('/update', (req, res) => {
        let sql = "UPDATE alumno SET nombre='" + req.body.nombre + "', apellido='" + req.body.apellido + "',dni='" + req.body.dni + "',id_co='" + req.body.id_co + "', id_cu='" + req.body.id_cu + "' WHERE id_alumno=" + req.body.id;
        let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
        });
    });
    
    // DELETE
    router.post('/delete',(req, res) => {
        let sql = "DELETE FROM alumno WHERE id_alumno="+req.body.id_alumno+"";
        let query = conn.query(sql, (err, results) => {
        if(err) throw err;
            res.redirect('/');
        });
    });

*/
    module.exports = router;

/*router.post('/enviar', async(req, res) =>{
    const { nombre, email, mensaje } = req.body;
*/

// Validar campos
/*if (!nombre || !email || !mensaje){
    return res.render('formulario', { error: 'Todos los campos son obligatorios' });
}*/


//Configurar transportador SMTP

/*const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'aurelie.spinka@ethereal.email',
        pass: 'Yra7s7WAfQ6V6UYq4s'
    }
});

//Configurar correo electrónico
const mailOptions = {
    from: email,
    to: 'destinatario@ejemplo.com',
    subject: 'Formulario de contacto',
    text: `
    Nombre: ${nombre}\n
    Email:${email}\n 
    Mensaje:${mensaje}`
};

//Try.catch estructura de control para manejar errores y excepciones

try{
    //Enviar correo electrónico
    await transporter.sendMail(mailOptions);
    res.render('confirmacion',{
        nombre: req.body.nombre
    });
} catch (error){
    console.log(error);
    res.render('formulario', { error: 'Error al enviar mensaje'});
}


})

module.exports = router;*/