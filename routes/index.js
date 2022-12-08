const router = require("express").Router();
const mainCont = require("../controllers");
const { auth } = require('express-openid-connect');
const ideaRoutes = require('./idea');
const listRoutes = require('./listitem');
const profileRoutes = require('./profile');
const reminderRoutes = require('./reminder');
const {routes , config} = require('./user');

router.use(auth(config));
router.route('/').get(mainCont.main);
router.route('/home').get(mainCont.home);


router.use('/idea', ideaRoutes);
router.use('/list', listRoutes);
router.use('/profile', profileRoutes);
router.use('/reminder', reminderRoutes);
router.use('/user', routes);


router.use('/', require('../api_docs/swagger'));

module.exports = router;