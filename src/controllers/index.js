const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const home = require('./home');
const register = require('./register');
const logIn = require('./logIn');
// const addData = require('./addData');
// const seeData = require('./seeData');
const symptoms = require('./symptoms');
const factors = require('./factors');
const error = require('./error');
// const logOut = require('./logOut');

router.use(bodyParser.urlencoded({ extended: false }));

// get routes

router.get('/', home.get);
router.get('/register', register.get);
router.get('/logIn', logIn.get);
// router.get('/addData');
// router.get('/seeData');
router.get('/symptoms/home', symptoms.getHome);
router.get('/symptoms/add', symptoms.getAdd);
router.get('/symptoms/scaleInfo', symptoms.getScaleInfo);
router.get('/symptoms/scaleSetup', symptoms.getScaleSetup);
router.get('/factors/home', factors.getHome);
router.get('/factors/add', factors.getAdd);
router.get('/factors/scaleInfo', factors.getScaleInfo);
router.get('/factors/scaleSetup', factors.getScaleSetup);

// router.get('/factors');
// router.get('/logOut');
router.use(error.client);
router.use(error.server);

// post routes

router.post('/register');
router.post('/addData');
router.post('/symptoms');
router.post('/factors');

module.exports = router;
