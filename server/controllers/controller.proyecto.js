const Proyecto = require("../models/proyecto.model");
const Reporte = require("../models/reporte.model");

/* leer un proyecto de la base de datos */
exports.readOne = async function (req, res) {
  console.log("controller.proyecto.readOne dice: este es el body:", req.body);
  const num = req.params.num;
  console.log("este es el número de proyecto a buscar: ", num);
  try {
    let proyecto = await Proyecto.findOne({ num: num });
    console.log("la base de datos devolvió este proyecto:", proyecto);
    let reportes = await Reporte.find(
      { "encabezado.numProyecto": num },
      "encabezado objetivo conclusiones"
    );
    console.log("el proyecto tiene estos reportes: ", reportes);
    res.json({proyecto, reportes});
  } catch (err) {
    res.send("Ha ocurrido el siguiente error al buscar el proyecto: ", err);
  }
};

/* leer todos los proyectos de la base de datos */
exports.readAll = async function (req, res) {
  console.log("controller.proyecto.readAll dice hola");
  try {
    let proyectos = await Proyecto.find();
    console.log("la base de datos devolvió esto:", proyectos);
    res.json(proyectos);
  } catch (err) {
    res.send("Ha ocurrido el siguiente error al buscar los proyectos: ", err);
  }
};

/* crear un nuevo proyecto */
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

/* Actualizar un proyecto */
exports.update = async function (req, res) {
  console.log(
    "controller.proyecto.actualizar dice: este es el body:",
    req.body
  );
  const num = req.params.num;
  console.log("tengo este numero para buscar: ", num);
  //ojo! validar data antes de pasarla al modelo
  let update = req.body;
  const filter = { num: num };
  try {
    await Proyecto.findOneAndUpdate(filter, update);
    res.send("gracias por actualizar");
  } catch (err) {
    console.log("Error:", err);
    res.send("Ha ocurrido un error y no se ha podido actualizar", err);
  }
};
