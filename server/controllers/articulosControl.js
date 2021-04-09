const articulosControl = {}
const fs = require('fs');
const { cnn_mysql } = require('../database/configDb');

articulosControl.addToBd = async (req, res) => {

    const articulosFile = fs.readFileSync("./json/info_prueba.json", "utf8");
    let articulos = JSON.parse(articulosFile);

    try {
        for (let i = 0; i <= Object.keys(articulos).length; i++ ){
           await cnn_mysql.promise().execute(`INSERT INTO articulos(id, descripcion, precio, existencia)
            VALUES (?, ?, ?, ?)`,
            [i, articulos[i].descripcion, articulos[i].precio, articulos[i].existencia]);
        }
    } catch (error) {
        console.log(error);
    };
};

articulosControl.listar = async (req, res) => {
   try {
    cnn_mysql.query(`SELECT * FROM articulos`, (err, resultSet) => {
        (err) ? res.status(500).send('Se presento un error') : 
        res.json(resultSet);
    });
   } catch (error) {
       console.log(error);
   }
};

module.exports = articulosControl;

