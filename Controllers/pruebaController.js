const pruebaService = require("../Services/pruebaService.js");
const { CONTENT_TYPE, TYPE_JSON } = require("../src/const.js").constantes;

exports.getPrueba = (req, res) => {
  const data = pruebaService.obtenerDatosPrueba();
  res.setHeader(CONTENT_TYPE, TYPE_JSON);
  res.status(200).json(data);
};

exports.readGetUsers = async (req, res) => {
  try {
    console.log("aqui lenguajes/frontend");
    res.setHeader(CONTENT_TYPE, TYPE_JSON);
    res.status(200);
    res.send(await pruebaService.getUsers());
  } catch (error) {
    console.log("Error en CONTROLLER  - getAllFrontendLanguajes - " + error);
    throw Error("Error en CONTROLLER - getAllFrontendLanguajes - " + error);
  }
};
