const Proyecto = require("../models/proyecto.model");

exports.guardar = function (req, res) {
  console.log("controller.proyecto.guardar dice: este es el body:", req.body);
  let data = req.body;
  //validar data antes de pasarla al modelo
  let proyecto = new Proyecto(data);
  console.log("modelo de proyecto: ");
  console.log(proyecto);
  //proyecto.save() ?
};
