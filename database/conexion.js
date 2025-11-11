const sql = require('mssql')
const configDB = require('./config').configDB


exports.getSQLConnection = async () => {
    try {
        console.log("entrando en getConnection")
        const pool = await sql.connect(configDB);

        return pool

    } catch (error) {
        console.log(`Error en getConnection: ${error}`)
    }
}