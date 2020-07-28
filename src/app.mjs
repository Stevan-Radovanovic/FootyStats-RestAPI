import Express from "express";
import sequelize from "./database/database.mjs";
import Body from "body-parser";

import playerRoutes from "./routes/player-routes.mjs";
import contractRoutes from "./routes/contract-routes.mjs";

import Player from "./models/player-model.mjs";
import Contract from "./models/contract-model.mjs";

const app = Express();

app.use(Body.json());

app.use((err, req, res, next) => {
  console.log("This is an error request handler");
});

app.use("/players", playerRoutes);
app.use("/contracts", contractRoutes);
Contract.belongsTo(Player, { onDelete: "CASCADE" });

sequelize
  .sync(/*{ force: true }*/)
  .then((res) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
