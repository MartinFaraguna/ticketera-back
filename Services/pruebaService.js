const pruebaRepository = require('../Repositories/pruebaRepository.js');

exports.obtenerDatosPrueba = () => {
  return pruebaRepository.getDatos().mensaje;
};