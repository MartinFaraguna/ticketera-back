const ticketsService = require("../Services/ticketsService.js");
const { CONTENT_TYPE, TYPE_JSON } = require("../src/const.js").constantes;

exports.readGetTickets = async (req, res) => {
  try {
    console.log("aqui tickets");
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200);
    res.send(await ticketsService.getTickets());
  } catch (error) {
    console.log("Error en CONTROLLER  - getTickets - " + error);
    throw Error("Error en CONTROLLER - getTickets - " + error);
  }
};
