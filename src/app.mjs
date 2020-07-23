import Express from "express";
import sequelize from "./database/database.mjs";

const app = Express();

app.use((err, req, res, next) => {
  console.log("This is an error request handler");
});

sequelize
  .sync()
  .then((res) => {
    console.log(res);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
