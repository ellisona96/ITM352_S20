var express = require('express');
var app = express();
app.all('*', function (request, response, next) {
    response.send(request.method + ' to path ' + request.path);
});
app.listen(8081, () => console.log(`listening on port 8081`));

//USE PORT 8081 IN CLASS 
//USE PORT 8080 AT HOME