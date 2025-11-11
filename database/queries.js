module.exports = {
  getUsers: "SELECT * FROM Usuarios",
  getTickets: "SELECT t.*, u.NOMBRE AS CLIENTE_NOMBRE, u.APELLIDO AS CLIENTE_APELLIDO, u.EMAIL AS CLIENTE_EMAIL, u.ROL as CLIENTE_ROL FROM dbo.Tickets t INNER JOIN dbo.Usuarios u ON t.CLIENTEID = u.ID",
};
