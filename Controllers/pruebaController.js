const pruebaService = require("../Services/pruebaService.js");
const { CONTENT_TYPE, TYPE_JSON } = require("../src/const.js").constantes;

exports.getPrueba = (req, res) => {
  const data = pruebaService.obtenerDatosPrueba();
  res.setHeader(CONTENT_TYPE, TYPE_JSON);
  res.status(200).json({ data });
};
