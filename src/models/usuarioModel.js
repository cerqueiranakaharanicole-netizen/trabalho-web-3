let usuarios = [
 { id: 2, titulo: 'Burnett'},
];

// Funções para manipular os usuarios
const getTodosUsuarios  = () => usuarios;

const getUsuarioId = (id) => usuarios.find(task => task.id === id);

const criarUsuario = (taskData) => {
 const newTask = {
 id: usuarios.length > 0 ? Math.max(...usuarios.map(t => t.id)) + 1 : 1,
 titulo: taskData.titulo,
 };
 usuarios.push(newTask);
 return newTask;
};

module.exports = {
 getTodosUsuarios ,
 getUsuarioId ,
 criarUsuario
}