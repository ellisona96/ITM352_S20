
var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(myParser.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `

<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

});


app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

app.post("/register", function (request, response) {
    // process a simple register form
    console.log("Got the registration request");
    let POST = request.body;

    username = POST.username;
    console.log("User=" + username);
    if (users_reg_data[username] == 'undefined') {
        users_reg_data[username] = {};
        users_reg_data[username].name = username;
        users_reg_data[username].password = 'newpass';
        if (POST.password != POST.repeat_password) {
            console.log("Passwords do not match.");
        }
        users_reg_data[username].email = 'newuser@user.com';

        var output_data = JSON.stringify(users_reg_data);
        fs.writeFileSync(filename, outputdata, "utf-8");

        response.send("User" + username + "registered.");
    } else {
        response.send("User" + username + "already taken, please try again.");
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));
