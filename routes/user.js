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
  secret: process.env.AUTH_0_SECRET,
  baseURL: 'https://cse341-finalproject.onrender.com',
  clientID: process.env.AUTH_0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH_0_BASE_URL
};

routes.get("/signin", userController.signin);

module.exports = {routes, config};
