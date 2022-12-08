const express = require('express');
const routes = express.Router();
const profileController =require("../controllers/profile");
const profileSchema= require("../models/profile");
const findOrCreate = require('mongoose-findorcreate');


profileSchema.plugin(findOrCreate);

routes.get("/dashboard", profileController.createProfile);
routes.route("/dashboard/:id").get(profileController.getProfile).post(profileController.createProfile).put(profileController.updateProfile).delete(profileController.deleteProfile);
// 
module.exports = routes;