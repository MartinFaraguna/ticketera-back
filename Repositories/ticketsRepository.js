const { getSQLConnection } = require("../database/conexion");
const queries = require("../database/queries.js");
const sql = require("mssql");

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

exports.crearTicket = async (ticket) => {

  console.log("Entrando en SQL REPOSITORY - crearTicket - ");
  const pool = await getSQLConnection();

  try {
    const resultado = await pool.request()
      .input('titulo', sql.VarChar, ticket.titulo)
      .input('descripcion', sql.Text, ticket.descripcion)
      .input('estado', sql.VarChar, ticket.estado)
      .input('clienteId', sql.Int, ticket.clienteId)
      .input('tecnicoId', sql.Int, ticket.tecnicoId)
      .input('categoria', sql.VarChar, ticket.categoria)
      .query(queries.crearTicket);

    return resultado.recordset[0];

  } catch (error) {
    console.log("Error en SQL REPOSITORY - crearTicket - " + error);
    throw Error("Error en SQL REPOSITORY - crearTicket - " + error);
  } finally {
    pool.close();
  }
};
