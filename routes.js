const express = require("express")
const router = express.Router()
function jsonify(req, res, payload){
	res.setHeader("Content-Type", "application/json")
	res.end(JSON.stringify(payload, null, 4))
}
router.get("/ping", function(req, res){
	jsonify(req, res, {message: "pong", success: true})
})
router.get("/", function(req, res){
	jsonify(req, res, {message: "welcome home", success: true})
})

module.exports = {
		router: router
}
