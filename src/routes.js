const express = require("express");
const SessionController = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");
const ChamadoController = require("./controllers/ChamadoController");
const PostoController = require("./controllers/PostoController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.post("/users", UserController.store);
routes.get("/users/:id", UserController.show);
routes.put("/users/:id/editar", UserController.update);

routes.post("/chamados", ChamadoController.store);
routes.get("/chamados", ChamadoController.index);
routes.get("/chamados/:id", ChamadoController.show);
routes.put("/chamados/:id/editar", ChamadoController.update);
routes.delete("/chamados/:id", ChamadoController.delete);

routes.post("/postos", PostoController.store);
routes.get("/postos", PostoController.index);

module.exports = routes;
