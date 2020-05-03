const Reporte = require("../models/reporte.model");
const Proyecto = require("../models/proyecto.model");

exports.readOne = async function (req, res) {
  const _id = req.params._id;
  console.log("este es el número de proyecto a buscar: ", _id);
  try {
    let reporte = await Reporte.findOne({ _id: _id });
    console.log(
      "voy a buscar el proyecto nro: ",
      reporte.encabezado.numProyecto
    );
    const proyecto = await Proyecto.findOne({
      num: reporte.encabezado.numProyecto,
    });
    const data = {
      reporte: reporte,
      proyecto: proyecto,
    };
    console.log("la base de datos devolvió este reporte:", data);
    res.json(data);
  } catch (err) {
    console.log("Ha ocurrido un error", err);
    res.send(err);
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
    const doc = await reporte.save();
    res.json(doc);
  } catch (err) {
    console.log("ERROR", err);
    res.send("Ha ocurrido un error", err);
  }
};

/* Actualizar un Reporte */
exports.update = async function (req, res) {
  console.log("controllerReporte.update dice: este es el body:", req.body);
  const _id = req.params._id;
  console.log("tengo este numero para buscar: ", _id);
  //ojo! validar data antes de pasarla al modelo
  let update = req.body;
  const filter = { _id: _id };
  try {
    const reporte = await Reporte.findOneAndUpdate(filter, update, {
      new: true,
    });
    const proyecto = await Proyecto.findOne({
      num: reporte.encabezado.numProyecto,
    });
    const data = {
      reporte: reporte,
      proyecto: proyecto,
    };
    console.log("La entrada se ha actualizado con éxito.");
    res.json(data);
  } catch (err) {
    console.log("Error:", err);
    res.send("Ha ocurrido un error y no se ha podido actualizar", err);
  }
};
