var express = require('express');
var router = express.Router();
const auth = require('../controllers/auth');

/* GET home page. */

router.post('/addUser',auth.login);
router.post('/deleterUser',auth.deleteUser);
// router.post('/login', auth.postLogin); // previous route
router.post('/login', auth.login);
router.post('/signup', auth.signUp);
router.post('/logout',auth.logout);

router.get('/getAllUsers', auth.getAllUsers);

module.exports = router;
