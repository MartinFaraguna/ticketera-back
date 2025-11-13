module.exports = {
  getUsers: "SELECT * FROM Usuarios",
  getTickets: "SELECT t.*, u.NOMBRE AS CLIENTE_NOMBRE, u.APELLIDO AS CLIENTE_APELLIDO, u.EMAIL AS CLIENTE_EMAIL, u.ROL as CLIENTE_ROL FROM dbo.Tickets t INNER JOIN dbo.Usuarios u ON t.CLIENTEID = u.ID",
  crearTicket: `
  INSERT INTO Tickets 
  (TITULO, DESCRIPCION, ESTADO, CLIENTEID, TECNICOID, CATEGORIA, FECHACREACION)
  VALUES 
  (@titulo, @descripcion, @estado, @clienteId, @tecnicoId, @categoria, GETDATE());
  SELECT SCOPE_IDENTITY() AS id;
  `
};
