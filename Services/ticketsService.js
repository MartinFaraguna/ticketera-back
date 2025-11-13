const ticketsRepository = require("../Repositories/ticketsRepository.js");


exports.getTickets = async () => {
  try {
    console.log("SERVICE - getAllTickets");
    return await ticketsRepository.getTicketsRepository();
  } catch (error) {
    console.log("Error en SERVICE  - getTicketsRepository - " + error);
    throw Error("Error en SERVICE  - getTicketsRepository - " + error);
  }
};

//Filtrado
exports.getFilter = async (clienteID, rol) => {
  try {
    console.log(`SERVICE - getFilter - clienteID: ${clienteID}, rol: ${rol}`);
    return await ticketsRepository.getFilter(clienteID, rol);
  } catch (error) {
    console.log("Error en SERVICE - getFilterTickets - " + error);
    throw Error("Error en SERVICE - getFilterTickets - " + error);
  }
};