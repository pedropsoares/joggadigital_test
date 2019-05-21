const express = require('express');
const path = require("path");

require('./database')();

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/api', require('./routes'));
app.use('/', require('./routes/web'));

app.listen(3000, () => {
    console.log("api has been started on port 3000");
});