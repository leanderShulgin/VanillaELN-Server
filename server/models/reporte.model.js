const mongoose = requiere("mongoose");

const schemaReporte = mongoose.Schema({
  encabezado: {
    activo: { type: Boolean, default: true },
    idProyecto: { type: String, required: true },
    nombreProyecto: { type: String, required: true },
    idReporte: { type: Number, required: true },
    etapa: { type: String, required: true },
    via: String,
    pmProducto: { type: Number, required: true },
    fecha: { type: Date, required: true },
    referencias: String,
    autor: { type: String, required: true },
    responsable: { type: String, required: true },
  },
  objetivo: { type: String, required: true },
  reaccion: String,
  reactivos: [
    {
      nombre: String,
      origen: String,
      masa: String,
      pureza: String,
      pm: Number,
      moles: Number,
      rm: Number,
      limitante: Boolean,
    },
  ],
  seguridad: String,
  equipo: String,
  registros: [
    {
      hora: Date,
      texto: String,
    },
  ],
  resultados: {
    masaProducto: Number,
    purezaProducto: Number,
    masaTeorica: Number,
    rendimiento: Number,
  },
  ambiental: {
    efsOrganicos: Number,
    efsAcuosos: Number,
    factorE: Number,
  },
  conclusiones: String,
});

export default mongoose.model("reportes", schemaReporte);
