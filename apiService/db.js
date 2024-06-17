const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    port     : 3307,
    password : 'hieuso',
    database : 'satqdb'
});

// connection.query(
//     'SELECT * FROM question; ',
//     function (err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );

module.exports = connection;