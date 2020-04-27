const Reporte = require("../models/reporte.model");

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
