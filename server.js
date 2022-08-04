const express = require('express');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 3000;
const dbConnectionStr = process.env.DB_STRING;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to Database`)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
});
