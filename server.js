var express = require('express');
var app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const resultsRoutes = require("./server/routes/results.routes");

app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist/devSpeak"))

app.use('/results', resultsRoutes);

app.get("/", (req, res)=>{
    // Relative path of the index.html file
    res.sendFile(__dirname+"/dist/devSpeak/index.html")
})

// app.get("/*", (req,res)=>{
//     res.redirect('back')
// })

app.get("/hello", (req, res) => {
    res.send("hello")
 });

// app.use(express.static(__dirname+"dist/devSpeak"));
app.listen(port);