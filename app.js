const express = require('express');
const axios = require("axios");

const bodyParser = require('body-parser');
const cors = require('cors');

const AllRoutes =  require('./routes/all');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(AllRoutes);
app.use(axios)


app.listen(3000);