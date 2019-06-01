const express=require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');



const app =express();

mongoose.Promise=global.Promise;

mongoose.connect(dbConfig.url,{
	useNewUrlParser:true
}).then(()=>{
	console.log("coonected")
}).catch(err=>{
	console.log("exception")
	process.exit();
})

 

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())

app.get("/",function(req,res) {
	res.send("This is Mongo db curd demo")
	// body...
})

app.get("/todo",function (req,res) {
	// body...
	res.send(req.url)
})

require('./app/routes/note.routes.js')(app);

app.listen(81);