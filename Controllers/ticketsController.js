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

//Filtro Tickets

exports.readFilteredTickets = async (req, res) => {
  try {
    // Normalizamos
    const clienteIDRaw = req.query.clienteID;
    const rolRaw = req.query.rol;

    console.log("🛂 Parámetros crudos recibidos:", { clienteIDRaw, rolRaw });

    const clienteID = parseInt(clienteIDRaw);
    const rol = typeof rolRaw === 'string' ? rolRaw.trim().toUpperCase() : '';

  

    // Validación 
    if (isNaN(clienteID) || !rol) {
      return res.status(400).json({ error: "Faltan parametros válidos: clienteID y rol" });
    }

    const tickets = await ticketsService.getFilter(clienteID, rol);

    if (!tickets || tickets.length === 0) {
      return res.status(404).json({ message: "No se encontraron tickets para ese cliente y rol" });
    }

    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error en CONTROLLER - readFilteredTickets -", error);
    res.status(500).json({ error: "Error interno al obtener tickets filtrados" });
  }
};
