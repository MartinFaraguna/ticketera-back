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

exports.crear = async (req, res) => {
  try {
    console.log("CONTROLLER - crear ticket");

    const nuevoTicket = await ticketsService.crearTicket(req.body);
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(201).json({
      mensaje: 'Ticket creado exitosamente',
      datos: nuevoTicket
    });

  } catch (error) {

    console.log("Error en CONTROLLER - crear - " + error);

    res.status(400).json({
      mensaje: 'Error al crear el ticket',
      error: error.message
    });
    
  }
};
