var  express = require('express')

var router = express.Router()

var burger = require('../models/burger.js')

router.get("/", function(req, res){
    burger.all(function(data){
        var muhStache = {
            burgers: data
        };
        console.log(muhStache)
        res.render("index", muhStache)
    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({devoured:true},condition,function(result){
        if (result.changedRows === 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })

})

router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", req.body.burger_name, function(result){
        console.log(result)
        res.redirect("/")
    })
})

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id

    burger.delete(condition, function(result){
        if (result.affectedRows === 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

module.exports = router
//to server.js