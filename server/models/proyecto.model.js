const mongoose = requiere("mongoose");

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

export default mongoose.model("proyectos", schemaProyecto);
