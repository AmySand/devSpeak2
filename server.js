var express = require('express');
var app = express();
const port = 8080;
const bodyParser = require('body-parser');
const resultsRoutes = require("./server/routes/results.route");

app.use(express.static(__dirname+"/dist"))

app.get("/", (req, res)=>{
    // Relative path of the index.html file
    res.sendFile(__dirname+"/dist/index.html")
})

app.get("/*", (req,res)=>{
    res.redirect('back')
})


app.get('/', function(req, res){
    res.send('hello world');
    });
app.use(bodyParser.json());

// app.use(express.static(__dirname+"dist/devSpeak"));

app.use('/results', resultsRoutes);



app.listen(port);