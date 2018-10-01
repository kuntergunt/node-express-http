const express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.send('Hello Express')
});
app.listen(process.env.PORT || 3000)
console.log("go to http://localhost:3000/test.html")