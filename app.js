
const express = require('express');
const path = require('path');

const homeRoutes = require('./src/routes/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Rotas
app.use('/', homeRoutes);

// Inicialização
app.listen(PORT, () => {
  console.log(`BurnCare disponível em http://localhost:${PORT}`);
});
