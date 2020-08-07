import Sequelize from "sequelize";

const sequelize = new Sequelize("man_city", "root", "whatever", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

export default sequelize;
