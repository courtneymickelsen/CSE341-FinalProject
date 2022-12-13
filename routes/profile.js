const express = require('express');
const routes = express.Router();
const profileController = require("../controllers/profile");
const profileSchema = require("../models/profile");


routes.get("/", profileController.createProfile);
routes.route("/:id").get(profileController.getProfile).put(profileController.updateProfile).delete(profileController.deleteProfile);
// 
module.exports = routes;