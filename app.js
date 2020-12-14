const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const routes = require("./routes.js").router

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use("/", routes)
app.listen(3000, function(){
	console.log("backend spinning at 3000")
})
