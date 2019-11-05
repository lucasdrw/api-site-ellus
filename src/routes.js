const express = require("express");
const SessionController = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");
const ChamadoController = require("./controllers/ChamadoController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);

routes.post("/chamados", ChamadoController.store);
routes.get("/chamados", ChamadoController.index);
routes.get("/chamados/:id", ChamadoController.show);
routes.put("/chamados/:id/editar", ChamadoController.update);
routes.delete("/chamados/:id", ChamadoController.delete); 


module.exports = routes;
