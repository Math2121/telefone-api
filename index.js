var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")
 

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/",router);

app.listen(4000,() => {
    console.log("Servidor rodando")
});
