import Express from "express";
import sequelize from "./database/database.mjs";
import playerRoutes from "./routes/player-routes.mjs";

const app = Express();

app.use((err, req, res, next) => {
  console.log("This is an error request handler");
});

app.use("/players", playerRoutes);

sequelize
  .sync()
  .then((res) => {
    //console.log(res);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
