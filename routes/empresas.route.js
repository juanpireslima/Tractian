const express = require('express');
const router = express.Router();

// Controller
const empresas_controller = require('../controllers/empresas.controller');

// EndPoints

router.post('/create', empresas_controller.create);

router.get('/:id', empresas_controller.details);

router.put('/:id/update', empresas_controller.update);

router.delete('/:id/delete', empresas_controller.delete);

module.exports = router;