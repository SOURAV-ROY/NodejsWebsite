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
    database: "nodejs_first"
}

let DBConnect = mysql.createConnection(DBC);

DBConnect.connect(function (error) {
    if (error) {
        console.log("Connection Fail");
    } else {
        console.log("Connection Success !!!")
        // InsertData(DBConnect);
        // DeleteData(DBConnect);
        UpdateData(DBConnect);
    }
})

// function InsertData(DBConnect) {
//
//     let SQL_QUERY = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) " +
//         "VALUES ('Sourav','123456','Ten','171111100','Dhaka')";
//     DBConnect.query(SQL_QUERY, function (error) {
//         if (error) {
//             console.log("Data Insert Error");
//         } else {
//             console.log("Data Insert Success !!");
//         }
//     })
// }

// function DeleteData(DBCheck) {
//     let DeleteQuery = "DELETE FROM `students_list` WHERE `roll`='123456'";
//     DBCheck.query(DeleteQuery, function (error) {
//         if (error) {
//             console.log('Data Not Delete');
//         } else {
//             console.log('Data Delete !!!');
//         }
//     })
//
// }

function UpdateData(DBCheck) {
    let UpdateQuery = "UPDATE `students_list` SET `name`='Sourav Roy', `phone`='0188223344',`city`='Dinajpur' WHERE `roll`='12'";
    DBCheck.query(UpdateQuery, function (error) {
        if (error) {
            console.log('Data Not Update');
        } else {
            console.log('Data Update Successfully !!!');
        }
    })
}
