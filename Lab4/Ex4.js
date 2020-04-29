var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log(req.headers); //output the request headers to the console
    res.writeHead(200, { 'Content-Type': 'text/html' }); // set MIME type to HTML 
//    res.write('<h1>The date is: ' + Date.now() + '</h1>'); //write a response to the client
res.write('<META http- equiv ="refresh" content="0;URL=http://www.google.com">'); //write a response to the client
res.write('window.location = "http://www.apple.com";');
res.write('res.writeHead(301, { "Location": "http://amazon.com');
    res.end(); //end the response
}).listen(8081); //the server object listens on port 8080 or 8081 at school

console.log('Hello world HTTP server listening on localhost port 8081');
