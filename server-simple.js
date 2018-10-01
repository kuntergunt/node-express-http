const express = require('express');
var app = express();
app.get('/', (request, response) => {
    
    response.send('Hello Express')
});
app.listen(process.env.PORT || 3000)
console.log("go to http://localhost:3000")