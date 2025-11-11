const { getSQLConnection } = require("../database/conexion");
const queries = require("../database/queries.js");


exports.getDatos = () => {
  return {
    status: "200",
    data: [
      { id: 1, titulo: "Ticket 1" },
      { id: 2, titulo: "Ticket 2" },
    ],
  };
};

exports.getUsersRepository = async () => {
  console.log("Entrando en SQL REPOSITORY - getUsersRepository - ");
  const pool = await getSQLConnection();
  try {
    const resultado = await pool.request().query(queries.getUsers);
    return resultado.recordset;
  } catch (error) {
    console.log("Error en SQL REPOSITORY - getAllFrontendLanguajes - " + error);
    throw Error("Error en SQL REPOSITORY - getAllFrontendLanguajes - " + error);
  } finally {
    pool.close();
  }
};
