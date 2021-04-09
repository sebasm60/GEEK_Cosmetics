'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require('./routes/routes'));
app.use("/ordenes", require('./routes/ordenesRouter'));

app.set("port", 5000);

app.listen(app.get('port'), () => {
    console.log('Server on port 5000');
});