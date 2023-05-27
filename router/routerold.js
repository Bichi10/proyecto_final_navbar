const {Router} = require ('express');
const router = new Router();

const mysql = require ('mysql');

// conexcion a base de datos

const conn = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password : '',
    database : 'edu_fisica'

})

conn.connect ((err) => {
    if(err) throw err;
    console.log("conexion establecida");
}
)

//select
router.get('/', (res, req) => {
    let sql = "select * from alumnos";
    let query = conn.query(sql, (err,result) =>
    {
        if (err) throw err;
        res.render('./views/alumnos'), {
            result: result
        }
    })
})

module.exports.router;