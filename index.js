const express = require('express');
const app = express();

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API está funcionando no Railway 🚀');
});

// Outras rotas
app.use('/api/jogos', require('./rotas/jogos'));

// Porta dinâmica para Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta ${PORT}');
});