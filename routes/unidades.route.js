const express = require('express');
const router = express.Router();

// Controller
const unidades_controller = require('../controllers/unidades.controller');

// EndPoints

router.post('/create', unidades_controller.create);

router.get('/:id', unidades_controller.details);

router.put('/:id/update', unidades_controller.update);

router.delete('/:id/delete', unidades_controller.delete);

module.exports = router;