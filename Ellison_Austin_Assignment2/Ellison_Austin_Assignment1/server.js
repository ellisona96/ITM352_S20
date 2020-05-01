//Updated from Lab 13
const querystring = require('../AS1/node_modules/body-parser/lib/types/node_modules/querystring');//require that the server responds to errors
var products = require('./public/product_data.js');//take data from product_data.js in the public folder

var express = require('express');//start express to set up server
var myParser = require("body-parser");//start body-parser to set up server
var fs = require('../AS1/node_modules/fs');
var app = express();//starts express
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);//respond to HTTP request by sending type of request and the path of request
    next();
});

app.use(myParser.urlencoded({ extended: true }));
//check for purchase. if yes gives invoice. if no reloads the page
app.get("/process_form", function (request, response) {
    //check if data is valid
    //find request.query
    if (typeof params['purchase_submit'] != 'undefined') {
        has_errors = false; 
        total_qty = 0; //checks to see if any quantities are selected 
        for (i = 0; i < products.length; i++) {
            if (typeofparams[`quantity${i}`] != 'undefined') {
                a_qty = params.get[`quantity${i}`];
                total_qty += a_qty;
                if (!isNonNegInt(a_qty)) {
                    has_errors = true;
                }
            }
        }
        //request view query string
        qstr = querystring.stringify(request.query);
        if (has_errors || total_qty == 0) {
            //if quantity is invalid, send back to products_page
            qstr = querystring.stringify(request.query);
            response.redirect("product_page.html" + qstr);
        } else {
            response.redirect("invoice.html" + qstr);
        }
    }
});

//if quantity valid send to invoice.html
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));

//pulled from lab13
function isNonNegInt(q, returnErrors = false) {
    errors = []; //assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); //Check if string is a number value
    if (q < 0) errors.push('Negative value!'); //Check if it is non-negative
    if (parseInt(q) != q) errors.push(' Not an integer!'); //Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}
