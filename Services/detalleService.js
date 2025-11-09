const detalleRepository = require('../Repositories/detalleRepository.js');

exports.getAllTickets = async () => {
  try {
    const data = await detalleRepository.getAllTickets().mensaje;
  } catch (error) {
    console.log("Error en detalleRepository - getAllTickets - " + error)
    throw Error("Error en detalleRepository - getAllTickets - " + error)
  }
};

exports.getDetalle = async (id) => {
  try {
    const data = await detalleRepository.getDetalleID(id).mensaje;
  } catch (error) {
    console.log("Error en detalleRepository - getDetalleID - " + error)
    throw Error("Error en detalleRepository - getDetalleID - " + error)
  }
};