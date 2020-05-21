const mongoose = require("mongoose");

const schemaReporte = mongoose.Schema({
  status: { type: String, default: "activo" },
  encabezado: {
    numProyecto: { type: Number, required: true },
    numReporte: { type: Number, required: true },
    etapa: { type: String, required: true },
    via: String,
    pmProducto: { type: Number, required: true },
    fecha: { type: Date, required: true },
    referencias: String,
    autor: { type: String, required: true },
    responsable: { type: String, required: true },
    keywords: [String],
  },
  objetivo: { type: String, required: true },
  reaccion: { kekule: String, smiles: [String] },
  reactivos: [
    {
      nombre: String,
      origen: String,
      masa: Number,
      pureza: Number,
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
      user: {
        nombre: String,
        id: String,
        apellido: String,
        titulo: String,
        apodo: String,
      },
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
  comentarios: [
    {
      hora: Date,
      texto: String,
      user: {
        nombre: String,
        id: String,
        apellido: String,
        titulo: String,
        apodo: String,
      },
    },
  ],
  conclusiones: String,
});

module.exports = mongoose.model("reportes", schemaReporte);
