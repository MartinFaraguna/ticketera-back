const detalleRepository = require('../Repositories/detalleRepository.js');


exports.getAllTickets = async () => {
  try {
    return await detalleRepository.getAllTickets();
  } catch (error) {
    console.log("Error en detalleRepository - getAllTickets - " + error)
    throw Error("Error en detalleRepository - getAllTickets - " + error)
  }
};

exports.getAllAsignedTickets = async () => {
  try {
    return await detalleRepository.getAllAsignedTickets();
  } catch (error) {
    console.log("Error en detalleRepository - getAllAsignedTickets - " + error)
    throw Error("Error en detalleRepository - getAllAsignedTickets - " + error)
  }
};

exports.getAllUnasignedTickets = async () => {
  try {
    return await detalleRepository.getAllUnasignedTickets();
  } catch (error) {
    console.log("Error en detalleRepository - getAllUnasignedTickets - " + error)
    throw Error("Error en detalleRepository - getAllUnasignedTickets - " + error)
  }
};

exports.getDetalleID = async (id) => {
  try {
    return await detalleRepository.getDetalleID(id);
  } catch (error) {
    console.log("Error en detalleRepository - getDetalleID - " + error)
    throw Error("Error en detalleRepository - getDetalleID - " + error)
  }
};

exports.getDetalleID = async (id) => {
  try {
    return await detalleRepository.getDetalleID(id);
  } catch (error) {
    console.log("Error en detalleRepository - getDetalleID - " + error)
    throw Error("Error en detalleRepository - getDetalleID - " + error)
  }
};

exports.setTecnicoID = async (idTecnico, idTicket) => {
  try {
    return await detalleRepository.setTecnicoID(idTecnico, idTicket);
  } catch (error) {
    console.log("Error en detalleRepository - getDetalleID - " + error)
    throw Error("Error en detalleRepository - getDetalleID - " + error)
  }
};



exports.getUsers = async () => {
  try {
    return await detalleRepository.getUsers();
  } catch (error) {
    console.log("Error en detalleRepository - getUsers - " + error)
    throw Error("Error en detalleRepository - getUsers - " + error)
  }
};

exports.getUserID = async (id) => {
  try {
    return await detalleRepository.getUserID(id);
  } catch (error) {
    console.log("Error en detalleRepository - getUserID - " + error)
    throw Error("Error en detalleRepository - getUserID - " + error)
  }
};