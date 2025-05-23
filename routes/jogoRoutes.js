const express = require('express');
const router = express.Router();
const jogoController = require('../controllers/jogoController');

// Rotas CRUD
router.get('/jogos', jogoController.getJogos);
router.post('/jogos', jogoController.criarJogo);
router.put('/jogos/:id', jogoController.atualizarJogo);
router.delete('/jogos/:id', jogoController.deletarJogo);
router.patch('/jogos/:id/favorito', jogoController.toggleFavorito);

module.exports = router;
