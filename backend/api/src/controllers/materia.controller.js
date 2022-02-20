const db = require("../config/database.js");

exports.Ping = async (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'pong',
    });
};

// ==> Método responsável por criar um novo 'Materia':
exports.createMateria = async (req, res) => {
    const { nome, cargahoraria, descricao, planodecurso } = req.body;
    const response = await db.query(
        'INSERT INTO materia (id, nome, cargahoraria, descricao, planodecurso) VALUES (DEFAULT, $1, $2, $3, $4)',
        [nome, cargahoraria, descricao, planodecurso],
    );
  
    res.status(201).send({
        message: 'Materia added successfully!',
        body: {
            materia: { nome, cargahoraria, descricao, planodecurso },
        },
    });
};

// ==> Método responsável por listar todas as 'Materias':
exports.listAllMaterias = async (req, res) => {
    const response = await db.query('SELECT * FROM materia');
    res.status(200).send(response.rows);
};

// ==> Método responsável por listar todas as 'Materias' filtrado por 'Curso' pelo 'Id':
exports.listAllMateriasCurso = async (req, res) => {
    const cursoId = parseInt(req.params.id);
    const response = await db.query(
      'SELECT m.id, m.nome, m.cargahoraria, m.descricao, m.planodecurso FROM materia m INNER JOIN curso_materia cm ON m.id = cm.idmateria WHERE cm.idcurso = 1',
    );
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Materia' pelo 'Id':
exports.findMateriaById = async (req, res) => {
    const materiaId = parseInt(req.params.id);
    const response = await db.query(
      'SELECT * FROM materia WHERE id = $1',
      [ materiaId ],
    );
    res.status(200).send(response.rows);
};
  
  // ==> Método responsável por atualizar uma 'Matéria' pelo 'Id':
exports.updateMateriaById = async (req, res) => {
    const materiaId = parseInt(req.params.id);
    const { nome, cargahoraria, descricao, planodecurso } = req.body;
  
    const response = await db.query(
      'UPDATE materia SET nome = $1, cargahoraria = $2, descricao = $3, planodecurso = $4 WHERE id = $5',
      [ nome, cargahoraria, descricao, planodecurso, materiaId ],
    );
  
    res.status(200).send({ message: 'Materia Updated Successfully!' });
};
  
// ==> Método responsável por excluir uma 'Materia' pelo 'Id':
exports.deleteMateriaById = async (req, res) => {
    const materiaId = parseInt(req.params.id);
    await db.query('DELETE FROM materia WHERE id = $1', 
      [ materiaId ],
    );
  
    res.status(200).send({ message: 'Materia deleted successfully!', materiaId });
};