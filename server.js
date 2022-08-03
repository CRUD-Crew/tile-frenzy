const express = require('express');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
});