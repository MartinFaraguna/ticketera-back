const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const routerPrueba = require('./Routers/routerPrueba');
const routerDetalle = require('./Routers/routerDetalle');
const routerDashboardSoporte = requier('./Routers/routerDashboardSoporte')

app.use('/', routerPrueba);
app.use('/main/dashboard-soporte', routerDashboardSoporte)
app.use('/main/dashboard-soporte/detalle', routerDetalle);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});