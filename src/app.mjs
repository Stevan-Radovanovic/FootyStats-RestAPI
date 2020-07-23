import Express from "express";
import DataBase from "./database/database.mjs";

const app = Express();

DataBase.execute("SELECT * FROM player").then((players) => {
  console.log(players[0]);
});

DataBase.execute("SELECT * FROM contract").then((contracts) => {
  console.log(contracts[0]);
});

DataBase.execute("SELECT * FROM game").then((games) => {
  console.log(games[0]);
});

DataBase.execute("SELECT * FROM contractbonus").then((bonuses) => {
  console.log(bonuses[0]);
});

DataBase.execute("SELECT * FROM stats").then((stats) => {
  console.log(stats[0]);
});

app.use((err, req, res, next) => {
  console.log("This is an error request handler");
});

app.listen(3000);
