const taskModel = require('../models/usuarioModel');
const path = require('path');

// GET /tarefas - Listar todas as tarefas
const getUsuarios = (req, res) => {
 const tasks = taskModel.getTodosUsuarios();
 res.json(tasks);
};

// GET /tarefas/:id - Obter uma tarefa específica
const getUsuariosId = (req, res) => {
 const id = parseInt(req.body.id);
 const tarefa = taskModel.getUsuarioId(id);
 
 if (!usuario) {
 res.status(404).json({ erro: 'Usuário não encontrada' });
 }
 res.json(usuario);
};

// POST /tasks - Criar uma nova tarefa
const criarUsuario = (req, res) => { 
 const nova = taskModel.criarUsuario(req.body);
 res.status(201).json(nova);
};

module.exports = {
 getUsuarios ,
 getUsuariosId,
 criarUsuario,
};