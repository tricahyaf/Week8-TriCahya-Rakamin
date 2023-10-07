var { pool } = require("../queries.js");
var fs = require("fs");

var sendQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf-8" });
pool.query(sendQuery, (err, res) => {
    console.log(err, res);
    console.log("Sending Complete");
    pool.end();
});