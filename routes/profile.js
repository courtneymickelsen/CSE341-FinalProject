const express = require('express');
const routes = express.Router();
const profileController =require("../controllers/profile");


routes.get("/dashboard", profileController.dashboard);

module.exports = routes;