'use strict';
const express = require('express');
const router = express.Router();

/**Importa controller da rota */
const controller  = require('../controllers/notes-controller');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router;
