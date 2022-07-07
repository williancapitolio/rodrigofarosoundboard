const routes = require("express").Router();
const SbController = require("../controller/SbController");

routes.get("/", SbController.getAll);

module.exports = routes;