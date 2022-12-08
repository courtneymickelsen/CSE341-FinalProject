const express = require('express');
const routes = express.Router();
const listItemController =require("../controllers/listitem");


routes.route('/').get(listItemController.getAllListItems).post(listItemController.createListItem);
routes.route('/item/:id').get(listItemController.getListItem).put(listItemController.updateListItem).delete(listItemController.deleteListItem);

// .put().delete();


























module.exports = routes;