const router = require('express-promise-router')();
const materiaController = require('../controllers/materia.controller');

// ==> Rota de teste
router.get('/ping', materiaController.Ping);

// ==> Rota responsável por criar uma nova 'Materia': (POST): localhost:3000/api/materias
router.post('/materias', materiaController.createMateria);

// ==> Rota responsável por listar todas as 'Materias': (GET): localhost:3000/api/materias
router.get('/materias', materiaController.listAllMaterias);

// ==> Rota responsável por listar todas as 'Materias' filtrado por 'Curso' pelo 'Id' (GET): localhost:3000/api/materias
router.get('/materiascurso/:id', materiaController.listAllMateriasCurso);

// ==> Rota responsável por selecionar 'Materia' pelo 'Id': (GET): localhost:3000/api/materias/:id
router.get('/materias/:id', materiaController.findMateriaById);

// ==> Rota responsável por atualizar 'Materia' pelo 'Id': (PUT): localhost: 3000/api/materias/:id
router.put('/materias/:id', materiaController.updateMateriaById);

// ==> Rota responsável por excluir 'Materia' pelo 'Id': (DELETE): localhost:3000/api/materias/:id
router.delete('/materias/:id', materiaController.deleteMateriaById);

module.exports = router;