const express = require('express');
require('dotenv').config();

const app = express();

const routeVehicleType = require('./Routes/RouteVehicleType')

const cors = require('cors');

const mongoose = require('mongoose')
const bodyParser = require('body-parser');



/* connect to db */
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err;
    console.log("Connected to db");
})
/* connect to db */


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors middleware
app.use(cors());


app.use(express.static('/public'));

/* middlewares */
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})



/* routers */
app.use('/otopark_backend/vehicle-types', routeVehicleType);






//comment
app.listen(process.env.PORT || 8000)