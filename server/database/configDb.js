const mysql = require('mysql2');
require('dotenv').config();

const conection_mysql = mysql.createConnection({
    host: "bktsvosarepih5hfcwde-mysql.services.clever-cloud.com",
    user: "utyjmdkjx0dmfgsz",
    password: "POU1UdMNJdLRIYnWt5YF",
    database: "bktsvosarepih5hfcwde",
    port: "3306"
});

module.exports = {
    cnn_mysql: conection_mysql
}