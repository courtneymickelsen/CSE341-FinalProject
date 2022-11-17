const express = require("express");
const userRouter = express.Router();
const userCont = require("../controllers/userController");

userRouter.route("/").get(userCont.home);
userRouter.use('/', require('../api_docs/swagger'));

module.exports = userRouter;