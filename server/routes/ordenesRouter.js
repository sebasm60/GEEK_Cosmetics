const { Router } = require('express');
const router = Router();

const ordenesControl = require('../controllers/ordenesControl');

router.get('/', ordenesControl.listarOrden);
router.post('/agregarOrden', ordenesControl.addOrden);

module.exports = router;