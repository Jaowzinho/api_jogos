const db = require('../config/db');

// Listar todos
exports.getJogos = (req, res) => {
  db.query("SELECT * FROM jogos", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Criar
exports.criarJogo = (req, res) => {
  const { nome, data, imagem } = req.body;
  const sql = "INSERT INTO jogos (nome, data, imagem) VALUES (?, ?, ?)";
  db.query(sql, [nome, data, imagem], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, nome, data, imagem });
  });
};

// Atualizar
exports.atualizarJogo = (req, res) => {
  const { nome, data, imagem } = req.body;
  const { id } = req.params;
  const sql = "UPDATE jogos SET nome = ?, data = ?, imagem = ? WHERE id = ?";
  db.query(sql, [nome, data, imagem, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Jogo atualizado');
  });
};

// Deletar
exports.deletarJogo = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM jogos WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Jogo deletado');
  });
};

// Favoritar
exports.toggleFavorito = (req, res) => {
  const { id } = req.params;
  db.query("UPDATE jogos SET favorito = NOT favorito WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Favorito atualizado');
  });
};
