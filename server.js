var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello goodbye!');
});

app.get('/perfect-octopus', function(request, response){
    response.send('Apparently I am a perfect octopus even though I have 7 tentacles');
});

app.listen(process.env.PORT || 4000);