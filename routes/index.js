const router = require("express").Router();
const mainCont = require("../controllers");

const ideaRoutes = require('./idea');
const listRoutes = require('./list');
const profileRoutes = require('./profile');
const reminderRoutes = require('./reminder');
const userRoutes = require('./user');

router.route('/').get(mainCont.home);
router.use('/idea', ideaRoutes);
router.use('/list', listRoutes);
router.use('/profile', profileRoutes);
router.use('/reminder', reminderRoutes);
router.use('/user', userRoutes);


router.use('/', require('../api_docs/swagger'));

module.exports = router;