var fs = require('fs');

var myParser = require('body-parser');

var filename = "user_data.json";
var raw_data = fs.readFileSync(filename, 'utf-8');
var users_reg_data = JSON.parse(raw_data);


var output_data = JSON.stringify(users_reg_data);
fs.writeFileSync(filename, outputdata, "utf-8");

console.log(users_reg_data);
fs.writeFileSync(filename, output_data, "utf-8");