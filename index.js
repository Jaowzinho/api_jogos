const express = require('express');
const cors = require('cors');
const app = express();
const jogoRoutes = require('./routes/jogoRoutes');

app.use(cors());
app.use(express.json()); // permite JSON
app.use('/uploads', express.static('uploads')); // se for usar imagens
app.use('/api', jogoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
