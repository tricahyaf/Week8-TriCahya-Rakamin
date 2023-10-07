var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res){
    res.send("Hello router GET!" + req.params.name);
});

router.post('/post', function(req, res){
    res.send("Hello router POST!");
});

router.put('/put', function(req, res){
    res.send("Hello router PUT");
});

module.exports = router;