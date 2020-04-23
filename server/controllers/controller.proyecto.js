const Proyecto = require("../models/proyecto.model");

exports.create = async function (req, res) {
  console.log("controller.proyecto.guardar dice: este es el body:", req.body);
  let data = req.body;
  //validar data antes de pasarla al modelo
  let proyecto = new Proyecto(data);
  console.log("modelo de proyecto: ");
  console.log(proyecto);
  try {
    await proyecto.save();
  } catch (err) {
    console.log("ERROR", err);
    res.send("Ha ocurrido un error", err);
  }
  res.send("El proyecto se ha creado con éxito.");
};
