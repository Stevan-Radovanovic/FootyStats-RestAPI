import mySql from "mysql2";

const db = mySql.createPool({
  host: "localhost",
  user: "root",
  database: "man_city",
  password: "whatever",
});

export default db.promise();
