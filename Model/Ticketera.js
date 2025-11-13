class Ticket {

    constructor(
        id,
        titulo,
        descripcion,
        estado, 
        clienteId,
        tecnicoId = null,
        categoria, 
        adjuntos = []
    ) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.clienteId = clienteId;
        this.tecnicoId = tecnicoId;
        this.categoria = categoria;

        this.fechaCreacion = new Date(); 
        this.fechaAsignacion = null;
        this.fechaCierre = null;
        
        this.adjuntos = adjuntos.map(adj => new Adjunto(adj.nombreArchivo, adj.url));
    }

    asignarTecnico(tecnicoId) {
        if (this.estado === 'PENDIENTE') {
            this.tecnicoId = tecnicoId;
            this.estado = 'ASIGNADO';
            this.fechaAsignacion = new Date();
        }
    }
}


class Adjunto {

    constructor(nombreArchivo, url) {
        this.nombreArchivo = nombreArchivo;
        this.url = url;
    }
}

export { Ticket, Adjunto };