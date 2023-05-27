const { router, Router } = require ('express');
const router = new Router();

const mysql = require ('mysql');

// conexion a base de datos

const conn = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'edu_fisica'
});

conn.connect((err) => {
    if(err) throw err;
    console.log("CONEXION ESTABLECIDA");
    
})

// SELECT 
router.get('/', (req, res) => {
    let sql = "SELECT * FROM alumnos";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render('alumnos', {
        results: results
    });
    });
});
 

module.exports.router;