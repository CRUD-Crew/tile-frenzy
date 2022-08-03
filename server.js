const express = require('express');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 3000;
const dbConnectionStr = process.env.DB_STRING;
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to Database`)
    })


app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
});