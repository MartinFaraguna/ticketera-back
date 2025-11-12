const { getSQLConnection } = require('../database/conexion');
const sql = requiere('mssql');


exports.getAllTickets = async () => { 
  const pool = await getSQLConnection();
  
  try {
    resultado = await pool.request().query("USE 'base de datos' SELECT * FROM 'tabla'");
    console.table(resultado.recordset);
    return resultado.recordset;
  } catch (error) {
    console.log("Error en detalleRepository - getAllTickets - " + error)
    throw Error("Error en detalleRepository - getAllTickets - " + error)
  } finally {
    pool.close()
  }
  return { mensaje: 'Datos de prueba desde el repositorio :)' }; 
};

exports.getAllAsignedTickets = async () => { 
  const pool = await getSQLConnection();
  
  try {
    resultado = await pool.request().query("USE 'base de datos' SELECT * FROM 'tabla' WHERE fechaAsignacion IS NOT NULL");
    console.table(resultado.recordset);
    return resultado.recordset;
  } catch (error) {
    console.log("Error en detalleRepository - getAllAsignedTickets - " + error)
    throw Error("Error en detalleRepository - getAllAsignedTickets - " + error)
  } finally {
    pool.close()
  }
  return { mensaje: 'Datos de prueba desde el repositorio :)' }; 
};

exports.getAllUnasignedTickets = async () => { 
  const pool = await getSQLConnection();
  
  try {
    resultado = await pool.request().query("USE 'base de datos' SELECT * FROM 'tabla' WHERE fechaAsignacion IS NULL");
    console.table(resultado.recordset);
    return resultado.recordset;
  } catch (error) {
    console.log("Error en detalleRepository - getAllUnasignedTickets - " + error)
    throw Error("Error en detalleRepository - getAllUnasignedTickets - " + error)
  } finally {
    pool.close()
  }
  return { mensaje: 'Datos de prueba desde el repositorio :)' }; 
};

exports.getDetalleID = async (id) => { 
  const pool = await getSQLConnection();
  
  try {
    resultado = await pool.request().query("USE 'base de datos' SELECT * FROM 'tabla' WHERE ID = @ID");
    console.table(resultado.recordset);
    return resultado.recordset;
  } catch (error) {
    console.log("Error en detalleRepository - getDetalleID - " + error)
    throw Error("Error en detalleRepository - getDetalleID - " + error)
  } finally {
    pool.close()
  }
};