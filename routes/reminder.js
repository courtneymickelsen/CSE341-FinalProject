const express = require('express');
const routes = express.Router();
const reminderController = require("../controllers/reminder");



routes.route("/").get( reminderController.getAllReminders ).post(reminderController.createReminder);
routes.route("/:id").get(reminderController.getReminder).put(reminderController.updateReminder).delete(reminderController.deleteReminder);

module.exports = routes;