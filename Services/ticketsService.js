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

exports.crearTicket = async (datosTicket) => {
  try {
    console.log("SERVICE - crearTicket");
    
    // Validaciones
    if (!datosTicket.titulo || datosTicket.titulo.trim() === '') {
      throw new Error('El título es obligatorio');
    }
    if (!datosTicket.descripcion || datosTicket.descripcion.trim() === '') {
      throw new Error('La descripción es obligatoria');
    }

    const clienteId = datosTicket.clienteId || datosTicket.clienteID;
    const tecnicoId = datosTicket.tecnicoId || datosTicket.tecnicoID;

    if (!clienteId) {
      throw new Error('El cliente es obligatorio');
    }

    // Establecer valores por defecto
    const ticket = {
      titulo: datosTicket.titulo,
      descripcion: datosTicket.descripcion,
      estado: datosTicket.estado || 'PENDIENTE',
      clienteId: clienteId,
      tecnicoId: tecnicoId || null,
      categoria: datosTicket.categoria || 'General'
    };

    const resultado = await ticketsRepository.crearTicket(ticket);
    return resultado;
  } catch (error) {
    console.log("Error en SERVICE - crearTicket - " + error);
    throw Error("Error en SERVICE - crearTicket - " + error);
  }
};