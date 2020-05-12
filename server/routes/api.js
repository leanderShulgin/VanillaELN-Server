// En esta ruta se accede a las funcionalidades del cuaderno de laboratorio

const express = require("express");
const router = express.Router();

// Controladores
const controllerProyecto = require("../controllers/controller.proyecto");
const controllerReporte = require("../controllers/controller.reporte");

// Modelos
const Proyecto = require("../models/proyecto.model");
const Reporte = require("../models/reporte.model");


/* RAIZ ---------------------------------------------- */
router.get("/", (req, res) => {
  res.send("Bienvenido al la api");
});

/* PROYECTOS ----------------------------------------- */

// Ver todos:
router.get("/proyectos", controllerProyecto.readAll);

// Ver:
router.get("/proyecto/:num", controllerProyecto.readOne);

// Crear:
router.post("/proyecto", controllerProyecto.create);

// Actualizar:
router.put("/proyecto/:num", controllerProyecto.update);

/* REPORTES   ------------------------------------------ */

// Ver:
router.get("/reporte/:_id", controllerReporte.readOne);

// Crear
router.post("/reporte", controllerReporte.create);

// Actualizar
router.put("/reporte/:_id", controllerReporte.update);

module.exports = router;
