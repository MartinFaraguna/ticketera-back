const { json } = require("express");
const detalleService = require("../Services/detalleService.js");
const { CONTENT_TYPE, TYPE_JSON } = require("../src/const.js").constantes;


exports.getAllTickets = async (req, res) => {
  try {
    const data = await detalleService.getAllTickets();

    if (data.length === 0) {
      return res.status(404).send(`No se ha encontrado ningún ticket`)
    }
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al obtener los tickets"
    })
    throw Error("ERROR 500")
  }
};

exports.getAllAsignedTickets = async (req, res) => {
  try {
    const data = await detalleService.getAllAsignedTickets();

    if (data.length === 0) {
      return res.status(404).send(`No se ha encontrado ningún ticket`)
    }
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al obtener los tickets"
    })
    throw Error("ERROR 500")
  }
};

exports.getAllUnasignedTickets = async (req, res) => {
  try {
    const data = await detalleService.getAllUnasignedTickets();

    if (data.length === 0) {
      return res.status(404).send(`No se ha encontrado ningún ticket`)
    }
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al obtener los tickets"
    })
    throw Error("ERROR 500")
  }
};

exports.getDetalleID = async (req, res) => {
  try {
    const id = req.paramas.id;
    const data = await detalleService.getDetalleID(id);

    if (data.length === 0) {
      return res.status(404).send(`No se ha encontrado el ticket con ID: ${id}`)
    }
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al buscar el ticket con ID: " + id
    })
    throw Error("ERROR 500")
  }
};

exports.setTecnicoID = async (req, res) => {
    try {
        const { idTecnico, idTicket} = req.params
        await frontendService.setTecnicoID(idTecnico, idTicket)

        res.setHeader(CONTENT_TYPE, TYPE_JSON)
        res.status(200).json()
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al asignar el técnico con ID: ${id}`
        })
        throw Error("ERROR 500")
    }
};



exports.getUsers = async (req, res) => {
  try {
    const data = await detalleService.getUsers();

    if (data.length === 0) {
      return res.status(404).send(`No se ha encontrado ningún usuario`)
    }
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al obtener los usuarios"
    })
    throw Error("ERROR 500")
  }
};

exports.getUserID = async (req, res) => {
  try {
    const id = req.paramas.id;
    const data = await detalleService.getUserID(id);

    if (data.length === 0) {
      return res.status(404).send(`No se ha encontrado el usuario con ID: ${id}`)
    }
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error al buscar el usuario con ID: " + id
    })
    throw Error("ERROR 500")
  }
};