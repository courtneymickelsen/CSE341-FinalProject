const express = require('express');
const routes = express.Router();
const userController =require("../controllers/user");
const findOrCreate = require('mongoose-findorcreate');
const userSchema= require("../models/user");
const dotenv = require("dotenv").config({path: '.env'});

userSchema.plugin(findOrCreate);

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "",
  baseURL: 'http://localhost:3000',
  clientID: '',
  issuerBaseURL: 'https://dev-y6qe1muvgy8lj2ln.us.auth0.com'
};

routes.get("/authorize/login", userController.login);

module.exports = {routes, config};
