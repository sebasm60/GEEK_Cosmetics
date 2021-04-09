ordenesControl = {};
const { cnn_mysql } = require('../database/configDb');

ordenesControl.addOrden = async (req, res) => {
    try {
        const {subtot, iva, total} = req.body;

        await cnn_mysql.promise().execute(`INSERT INTO ordenes(subtotal, iva, total)
        VALUES (?, ?, ?)`,
        [subtot, iva, total]);
    } catch (error) {
        console.log(error);
    };
};

ordenesControl.listarOrden = async (req, res) => {
    try {
     cnn_mysql.query(`SELECT * FROM ordenes`, (err, resultSet) => {
         (err) ? res.status(500).send('Se presento un error') : 
         res.json(resultSet);
     });
    } catch (error) {
        console.log(error);
    }
 };

 module.exports = ordenesControl;