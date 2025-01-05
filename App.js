const express = require('express');
const path = require('path');
const rotes = require('./routes/routes')

const app = express();
// Porta de acesso
const port = 3000;


// expecificando a engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(rotes)

// Serviço ouvindo na porta
app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});