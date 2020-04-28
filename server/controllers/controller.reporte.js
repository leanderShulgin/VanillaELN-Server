const Reporte = require("../models/reporte.model");

exports.readOne = async function (req, res) {
  console.log("controller.reporte.readOne dice: este es el body:", req.body);
  const _id = req.params._id;
  console.log("este es el número de proyecto a buscar: ", _id);
  try {
    let data = await Proyecto.findOne({ _id: _id });
    console.log("la base de datos devolvió este reporte:", data);
    res.json(data);
  } catch (err) {
    res.send("Ha ocurrido el siguiente error al buscar el proyecto: ", err);
  }
};

exports.create = async function (req, res) {
  console.log("controller.reporte.create dice: este es el body:", req.body);
  let data = req.body;
  //validar data antes de pasarla al modelo
  let reporte = new Reporte(data);
  console.log("modelo del reporte: ", reporte);
  console.log(reporte);
  try {
    await reporte.save();
  } catch (err) {
    console.log("ERROR", err);
    res.send("Ha ocurrido un error", err);
  }
  res.send("El reporte se ha creado con éxito.");
};
