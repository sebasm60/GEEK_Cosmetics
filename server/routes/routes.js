const { Router } = require('express');
const router = Router();

const articulosControl = require('../controllers/articulosControl');

//router.get('/', articulosControl.addToBd);
router.get('/', articulosControl.listar);

module.exports = router;