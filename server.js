const express = require('express'); //allows us to use express within node.
const app = express(); //formats our app for express.

require('dotenv').config() //allows us to use environment variables within our file.
const PORT = process.env.PORT || 3000; //allows us to use a local defined port or a port chosen by a host.
const dbConnectionStr = process.env.DB_STRING; //allows us to hide sensitive info inside of the environment file.
const MongoClient = require('mongodb').MongoClient; //imports MongoDB into project.

let DB; //Needs to be outside so we can use it within all of our functions. Scoping.

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }) //connect client to our MongoDB collection
    .then(client => {
        console.log(`Connected to Database`);
        DB = client.db('tile-database'); //gives our database a name for our client.
    });

    app.get('/', (req, res) => {
        DB.collection('tiles').find().toArray() //takes our cluster and converts it to an array.
        .then( tiles => {
            res.render('index.ejs', {tiles}); //renders all of our tiles (array of documents) in our EJS file.
            console.log(tiles);
        })
        .catch( err => {
            console.error(error); //sends errors to console.
        })
         //renders the EJS file in the browser at default endpoint.
    });

app.set('view engine', 'ejs'); //sets our view engine as ejs file in the browser.
app.use(express.static('public')); //allows us to serve up our static files from the public folder.
app.use(express.urlencoded({extended:true})); //alternative to body parser.
app.use(express.json()); //allows us to recieve and send data objects for POST and PUT requests.

app.listen(PORT, () => { //sets our app to run on our port.
    console.log(`listening on PORT ${PORT}`)
});
