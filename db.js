// const { Sequelize, Model, DataTypes } = require("sequelize");
// const express = require("express");
// const app = express();
// const port = 3000;

// const sequelize = new Sequelize("ejercicio_21_blog", "root", "root", {
//   host: "127.0.0.1",
//   port: 3306,
//   dialect: "mysql",
// });

// class Article extends Model {}

// Article.init(
//   {
//     id: {
//       type: DataTypes.BIGINT.UNSIGNED,
//       primaryKey: true,
//       autoIncrement: true,
//     },

//     title: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },

//     content: {
//       type: DataTypes.STRING(250),
//       allowNull: false,
//     },

//     authorName: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },

//     authorLastName: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },

//     authorEmail: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },
//   },
//   { sequelize, modelName: "article" }
// );

// sequelize.sync({ force: true });

// app.get("/", async (req, res) => {
//   res.json("Base de datos");
// });

// app.listen(port, () =>
//   console.log(`Se esta corriendo el servidor en el puerto ${port}`)
// );
