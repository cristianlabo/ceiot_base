const express = require("express");
const bodyParser = require("body-parser");
const {MongoClient} = require("mongodb");
const { Client } = require('pg');
require('dotenv').config();



const connectionData = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: false,
}

  
  db = new Client(connectionData)
  db.connect();


const render = require("./render.js");
// Measurements database setup and access

let database = null;
const collectionName = "measurements";

async function startDatabase() {
    const uri = "mongodb://localhost:27017/?maxPoolSize=20&w=majority";	
    const connection = await MongoClient.connect(uri, {useNewUrlParser: true});
    database = connection.db();
}

async function getDatabase() {
    if (!database) await startDatabase();
    return database;
}

async function insertMeasurement(message) {
    const {insertedId} = await database.collection(collectionName).insertOne(message);
    return insertedId;
}

async function getMeasurements() {
    return await database.collection(collectionName).find({}).toArray();	
}

// API Server

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('spa/static'));

const PORT = 8080;

app.post('/measurement', function (req, res) {
-   console.log("device id    : " + req.body.id + " key         : " + req.body.key + " temperature : " + req.body.t + " humidity    : " + req.body.h + " presure    : " + req.body.p);	
    const {insertedId} = insertMeasurement({id:req.body.id, t:req.body.t, h:req.body.h, p:req.body.p});
	res.send("received measurement into " +  insertedId);
    

});


async function post_consultas(consulta,parametros) {
     
    db = new Client(connectionData)
    db.connect();
    await  db.query(consulta,parametros).then(response => {
        db.end()
    })
    .catch(err => {
        db.end()
    })  
 } 


app.post('/device', async function (req, res) {
	console.log("device id    : " + req.body.id + " name        : " + req.body.n + " key         : " + req.body.k );
    await post_consultas( "INSERT INTO devices VALUES ( $1 , $2 , $3 )" ,[req.body.id,req.body.n,req.body.k]);
	res.send("received new device");
});

app.get('/web/device', async function (req, res) {

    db = new Client(connectionData)
    db.connect();
    await db.query("SELECT * FROM devices")
    .then(response => {
        console.log(response.rows)
        var devices = response.rows.map( function(device) {
                console.log(device);
                return '<tr><td><a href=/web/device/'+ device.device_id +'>' + device.device_id + "</a>" +
                           "</td><td>"+ device.name+"</td><td>"+ device.key+"</td></tr>";
               }
            );
            res.send("<html>"+
                     "<head><title>Sensores</title></head>" +
                     "<body>" +
                        "<table border=\"1\">" +
                           "<tr><th>id</th><th>name</th><th>key</th></tr>" +
                           devices +
                        "</table>" +
                     "</body>" +
                "</html>");
        db.end()
    })
    .catch(err => {
        db.end()
    }) 
    
});


app.get('/web/device/:id', async function (req,res) {
    var template = "<html>"+
                     "<head><title>Sensor {{name}}</title></head>" +
                     "<body>" +
		        "<h1>{{ name }}</h1>"+
		        "id  : {{ id }}<br/>" +
		        "Key : {{ key }}" +
                     "</body>" +
                "</html>";

    db = new Client(connectionData)
    db.connect();
    await db.query("SELECT * FROM devices WHERE device_id = $1 ",[req.params.id]).then(response => {
        console.log(response.rows)
        res.send(render(template,{id:response.rows[0].device_id, key: response.rows[0].key, name:response.rows[0].name}));
        db.end()
    })
    .catch(err => {
        db.end()
    }) 

});	

app.get('/term/device/:id', async function (req, res) {
    var red = "\33[31m";
    var green = "\33[32m";
    var blue = "\33[33m";
    var reset = "\33[0m";
    var template = "Device name " + red   + "   {{name}}" + reset + "\n" +
		   "       id   " + green + "       {{ id }} " + reset +"\n" +
	           "       key  " + blue  + "  {{ key }}" + reset +"\n";

    db = new Client(connectionData)
    db.connect();
    await db.query("SELECT * FROM devices WHERE device_id = $1 ",[req.params.id])
    .then(response => {
        console.log(response.rows)
        res.send(render(template,{id: response.rows[0].device_id, key: response.rows[0].key, name:response.rows[0].name}));

        db.end()
    })
    .catch(err => {
        db.end()
    }) 
   
});


app.get('/measurement', async (req,res) => {
            
    res.send(await getMeasurements());
});



app.get('/web/measurement', async (req,res) => {

    var mediciones = await database.collection(collectionName).find({}).toArray();

    
     mediciones = mediciones.map( function(medicion) {
        return "<tr><td><a href=/measurement/>" + "</a>" +  medicion.id +"</td><td>"+  medicion.t +"</td><td>"+  medicion.h +"</td><td>"+ medicion.p  +"</td></tr>";
        }
    );

    res.send("<html>"+
    "<head><title>measurement</title></head>" +
    "<body>" +
       "<table border=\"1\">" +
       "<tr><th>id</th><th>temperatura</th><th>humedad</th><th>presion</th></tr>" +
          mediciones +
       "</table>" +
    "</body>" +
    "</html>");

});


async function get_consultas(consulta,res) {

   db = new Client(connectionData) 
   db.connect();
        await  db.query(consulta)
        .then(response => {
            console.log(response.rows)
            res.send(response.rows)
            db.end()
        })
        .catch(err => {
            db.end()
        }) 
} 

app.get('/device', async function(req,res) {
    
     await  get_consultas("SELECT * FROM devices ",res);
    
});


startDatabase().then(async() => {

    
    const addAdminEndpoint = require("./admin.js");
    addAdminEndpoint(app, render);

    await insertMeasurement({id:'00', t:'18', h:'78',p:'93043.98'});
    await insertMeasurement({id:'00', t:'19', h:'77',p:'93044.98'});
    await insertMeasurement({id:'00', t:'17', h:'76',p:'93045.98'});
    await insertMeasurement({id:'01', t:'17', h:'75',p:'93046.98'});
    console.log("mongo measurement database Up");

    
    await db.query("drop table if exists devices");
    await db.query("drop table if exists users");
    await db.query("CREATE TABLE devices (device_id VARCHAR, name VARCHAR, key VARCHAR)");
    await db.query("INSERT INTO devices VALUES ('00', 'Fake Device 00', '123456')");
    await db.query("INSERT INTO devices VALUES ('01', 'Fake Device 01', '234567')");
    await db.query("CREATE TABLE users (user_id VARCHAR, name VARCHAR, key VARCHAR)");
    await db.query("INSERT INTO users VALUES ('1','Ana','admin123')");
    await db.query("INSERT INTO users VALUES ('2','Beto','user123')"); 
    
    console.log("sql device database up");

    app.listen(PORT, () => {
        console.log(`Listening at ${PORT}`);
    });
});
