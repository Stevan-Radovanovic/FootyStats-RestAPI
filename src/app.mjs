import Express from "express";
import sequelize from "./database/database.mjs";
import Body from "body-parser";

import playerRoutes from "./routes/player-routes.mjs";
import contractRoutes from "./routes/contract-routes.mjs";

import Player from "./models/player-model.mjs";
import Contract from "./models/contract-model.mjs";
import Bonus from "./models/bonus-model.mjs";

const app = Express();

app.use(Body.json());

app.use((err, req, res, next) => {
  console.log(err);
});

app.use("/players", playerRoutes);
app.use("/contracts", contractRoutes);

Contract.belongsTo(Player, {
  foreignKey: { allowNull: false },
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
Player.hasMany(Contract);

Bonus.belongsTo(Contract, {
  foreignKey: { allowNull: false },
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
Contract.hasMany(Bonus);

sequelize
  .sync({ force: true })
  .then((res) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
