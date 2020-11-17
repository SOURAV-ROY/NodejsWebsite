// let http = require('http');
// let fs = require('fs');
//
// let server = http.createServer(function (req, res) {
//
//     if (req.url === "/") {
//         let home = fs.readFileSync("home.html", 'utf-8');
//         res.end(home);
//
//     } else if (req.url === "/about") {
//         let About = fs.readFileSync("About.html", 'utf-8');
//         res.end(About);
//
//     } else if (req.url === "/contact") {
//         let Contact = fs.readFileSync("Contact.html", 'utf-8');
//         res.end(Contact);
//
//     } else if (req.url === "/portfolio") {
//         let Portfolio = fs.readFileSync("Portfolio.html", 'utf-8');
//         res.end(Portfolio);
//
//     }
// });
//
// server.listen(7070);
// console.log("Serer 7070 RUN Success!!");

let mysql = require("mysql");

let DBC = {
    host: "localhost",
    user: "root",
    password: "",
}

let DBConnect = mysql.createConnection(DBC);

DBConnect.connect(function (error) {
    if (error) {
        console.log("Connection Fail");
    } else {
        console.log("Connection Success !!!")
    }
})
