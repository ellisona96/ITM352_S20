var express = require('express');
var app = express();
var myParser = require("body-parser"); //added to run the body-parser package

function isNonNegInt(q, sendArrayBack = false)
{
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    if (sendArrayBack)
    {
        return (errors);
    } else
    {
        return(errors.length == 0);
    }
}

app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
    var POST = request.body;
    //response.send(POST); 


//console.log(typeof POST['quantity_textbox']);

if (typeof POST['quantity_textbox'] != 'undefined') {
    q = POST['quantity_textbox'];
    if (isNonNegInt(q)) {
        response.send(`Thank you for purchasing ${q} things!`); 
    } else {
        response.send(`${q} is not a quantity! Press the back button and try again.`);
    }
}

});
app.use(express.static('./public'));
app.listen(8081, () => console.log(`listening on port 8081`));

//USE PORT 8081 IN CLASS 
//USE PORT 8080 AT HOME