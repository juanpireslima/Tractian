const express = require('express');
const router = express.Router();

// Controller
const ativos_controller = require('../controllers/ativos.controller');

// EndPoints

router.post('/create', ativos_controller.create);

router.get('/:id', ativos_controller.details);

router.put('/:id/update', ativos_controller.update);

router.delete('/:id/delete', ativos_controller.delete);

module.exports = router;