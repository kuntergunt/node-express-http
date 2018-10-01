const express = require('express');
var fs = require("fs");
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    var file = "./text.txt";

    fs.readFile(file, function (err, data) {
        if (err) {
            console.log(err);
        } 
        console.log("data: " + data);
        res.end(data);
    });
});

app.listen(3000)

console.log("go to http://localhost:3000")