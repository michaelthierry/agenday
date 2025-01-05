// CONSTANTE DE ROTAS
const routes = require("express").Router();
const TaskController = require("../contoller/TaskController");

routes.get("/home", TaskController.getAll);

module.exports = routes;