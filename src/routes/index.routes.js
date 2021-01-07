const { Router } = require('express');
const indexController = require('../controllers/inidex.controller');
const router = Router();

router.get('/', indexController.renderIndex);

router.get('/about', indexController.renderAbout);



module.exports = router;