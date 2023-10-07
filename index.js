var express = require('express');
var app = express();
var fs = require('fs');
var routeFiles = fs.readdirSync('./route');

routeFiles.forEach((file) => {
    const route = require(`./route/${file}`);
    app.use(route);
});

app.listen(3000, () => {
    console.log("Connected");
});