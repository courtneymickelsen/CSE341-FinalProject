const express = require('express');
const routes = express.Router();
const ideasController = require("../controllers/idea");

routes.route('/').get(ideasController.getIdeas).post(ideasController.createIdea);
routes.route('/:id').get(ideasController.getIdea).put(ideasController.updateIdea).delete(ideasController.deleteIdea);
module.exports = routes;