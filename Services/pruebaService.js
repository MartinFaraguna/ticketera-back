const pruebaRepository = require("../Repositories/pruebaRepository.js");

exports.obtenerDatosPrueba = () => {
  return pruebaRepository.getDatos();
};

exports.getUsers = async () => {
  try {
    console.log("SERVICE - getAllFrontendLanguages");
    return await pruebaRepository.getUsersRepository();
  } catch (error) {
    console.log("Error en SERVICE  - getAllFrontendLanguajes - " + error);
    throw Error("Error en SERVICE  - getAllFrontendLanguajes - " + error);
  }
};

































































