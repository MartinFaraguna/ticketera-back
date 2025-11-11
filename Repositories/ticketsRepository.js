const { getSQLConnection } = require("../database/conexion");
const queries = require("../database/queries.js");

exports.getTicketsRepository = async () => {
  console.log("Entrando en SQL REPOSITORY - getTicketsRepository - ");
  const pool = await getSQLConnection();
  try {
    const resultado = await pool.request().query(queries.getTickets);
    return resultado.recordset;
  } catch (error) {
    console.log("Error en SQL REPOSITORY - getTicketsRepository - " + error);
    throw Error("Error en SQL REPOSITORY - getTicketsRepository - " + error);
  } finally {
    pool.close();
  }
};
