const mongoose = require("mongoose");

const schemaProyecto = mongoose.Schema({
  fecha: { type: Date, default: Date.now },
  cas: String,
  descripcion: { type: String, required: true },
  id: { type: Number, required: true },
  nombreProyecto: String,
  pm: Number,
  responsable: { type: String, required: true },
  smiles: String,
  tipo: String,
});

module.exports = mongoose.model("proyectos", schemaProyecto);
