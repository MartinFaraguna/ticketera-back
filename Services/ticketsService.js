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