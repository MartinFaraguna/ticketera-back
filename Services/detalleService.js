const detalleRepository = require('../Repositories/detalleRepository.js');


exports.getAllTickets = async () => {
  try {
    const data = await detalleRepository.getAllTickets().mensaje;
  } catch (error) {
    console.log("Error en detalleRepository - getAllTickets - " + error)
    throw Error("Error en detalleRepository - getAllTickets - " + error)
  }
};

exports.getAllAsignedTickets = async () => {
  try {
    const data = await detalleRepository.getAllAsignedTickets().mensaje;
  } catch (error) {
    console.log("Error en detalleRepository - getAllAsignedTickets - " + error)
    throw Error("Error en detalleRepository - getAllAsignedTickets - " + error)
  }
};

exports.getAllUnasignedTickets = async () => {
  try {
    const data = await detalleRepository.getAllUnasignedTickets().mensaje;
  } catch (error) {
    console.log("Error en detalleRepository - getAllUnasignedTickets - " + error)
    throw Error("Error en detalleRepository - getAllUnasignedTickets - " + error)
  }
};

exports.getDetalleID = async (id) => {
  try {
    const data = await detalleRepository.getDetalleID(id).mensaje;
  } catch (error) {
    console.log("Error en detalleRepository - getDetalleID - " + error)
    throw Error("Error en detalleRepository - getDetalleID - " + error)
  }
};