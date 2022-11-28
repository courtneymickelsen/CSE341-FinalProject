const express = require('express');
const routes = express.Router();
const userController =require("../controllers/user");
const findOrCreate = require('mongoose-findorcreate');
const userSchema= require("../models/user");

userSchema.plugin(findOrCreate);

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "inttNAvBeBzu4GSg2mKgznrh5z4R9P5qE5WKpNjMz3F3ye_N5YlDFDZzAWMGOWlP",
  baseURL: 'http://localhost:3000',
  clientID: 'w8SIFXmlXyTcZFI257Q6LKNwP1euFuaI',
  issuerBaseURL: 'https://dev-y6qe1muvgy8lj2ln.us.auth0.com'
};

routes.get("/authorize/login", userController.login);

module.exports = {routes, config};
