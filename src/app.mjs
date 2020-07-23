import Express from "express";
import DataBase from "./database/database.mjs";

const app = Express();

DataBase.execute("SELECT * FROM players").then((players) => {
  console.log(players[0]);
});

app.use((err, req, res, next) => {
  console.log("This is an error request handler");
});

app.listen(3000);
