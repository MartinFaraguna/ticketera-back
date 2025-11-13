const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

const routerPrueba = require('./Routers/routerPrueba');
const routerTickets = require('./Routers/routerTickets');

app.use('/', routerPrueba);
app.use('/tickets', routerTickets);

app.use('/nuevo-ticket', ticketsController.crear);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});