const express = require('express');
const app = express();

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
const body_parser = require('body-parser');
const mongoose=require('./db.js');

app.use(express.urlencoded());
app.use(body_parser.json());

var taskController = require('./taskController.js');
app.use('/api', taskController);

const port = 4000;
app.listen(port, () => {
   console.log(`Server listening at ${port}`);
});