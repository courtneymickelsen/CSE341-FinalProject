const express = require('express');
const routes = express.Router();
const profileController =require("../controllers/profile");
const profileSchema= require("../models/profile");
const findOrCreate = require('mongoose-findorcreate');


profileSchema.plugin(findOrCreate);

routes.get("/dashboard", profileController.createProfile);
routes.route("/dashboard/:id").get(profileController.createProfile).delete(profileController.deleteProfile);
// .put(profileController.updateProfile)
module.exports = routes;