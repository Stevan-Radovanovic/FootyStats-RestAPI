import Express from "express";
import sequelize from "./database/database.mjs";
import Body from "body-parser";

import playerRoutes from "./routes/player-routes.mjs";
import contractRoutes from "./routes/contract-routes.mjs";
import bonusRoutes from "./routes/bonus-routes.mjs";
import adminRoutes from "./routes/admin-routes.mjs";
import gameRoutes from "./routes/game-routes.mjs";
import statisticRoutes from "./routes/statistic-routes.mjs";

import Player from "./models/player-model.mjs";
import Contract from "./models/contract-model.mjs";
import Bonus from "./models/bonus-model.mjs";
import Admin from "./models/admin-model.mjs";
import Game from "./models/game-model.mjs";
import Statistic from "./models/statistic-model.mjs";

const app = Express();

app.use(Body.json());

app.use((err, req, res, next) => {
  console.log(err);
});

app.use("/players", playerRoutes);
app.use("/contracts", contractRoutes);
app.use("/bonuses", bonusRoutes);
app.use("/admins", adminRoutes);
app.use("/games", gameRoutes);
app.use("/statistics", statisticRoutes);

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

Player.belongsToMany(Game, { through: Statistic });
Game.belongsToMany(Player, { through: Statistic });

sequelize
  .sync(/*{ force: true }*/)
  .then((res) => {
    console.log("StatsDepo - Manchester City started...");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
