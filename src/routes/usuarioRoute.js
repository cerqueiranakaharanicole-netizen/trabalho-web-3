const express = require('express');
const router = express.Router();

const usuarioController = require('..//routes/usuarioRoute');

// Definindo as rotas para as operações CRUD
router.get('/usuarios', usuarioController.getUsuarios);
router.get('/usuarios/:id', usuarioController.getUsuariosId);
router.post('/usuarios/', usuarioController.criarUsuario );
router.get('/', usuarioController.paginaInicial);

module.exports = router;