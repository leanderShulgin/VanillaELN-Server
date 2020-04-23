//En esta ruta se accede a las funcionalidades del cuaderno de laboratorio

const express = require("express");
const router = express.Router();

//Controladores
const controllerProyecto = require("../controllers/controller.proyecto");
const contReporte = require("../controllers/controller.proyecto");

//Modelos
const Proyecto = require("../models/proyecto.model");
const Reporte = require("../models/reporte.model");

// Mensajes provisorios:
mensaje = {
  proyectos:
    "<h2>Estas haciendo un get a Proyectos, deseás ver una lista de tus proyectos</h2><br /><p>Cuando abras esta url te aparecerá un listado de todos tus proyectos. Vas a tener algunas opciones de filtrado, pero como es eperable que el número de proyectos sea acotado la vista global será suficiente en la mayoría de los casos. Desde acá podés acceder a la vista de los reportes</p>",
  proyecto:
    "<h2>Estas haciendo un get a proyecto, deseás ver el índice de ensayos de un proyecto. Esta url debe incluir el id del proyecto que deseas ver</h2><br /><p>Cuando pases el ID, el controlador hará una búsqueda en la base de datos y si lo encuentra te devolverá un json con un listado minimo de todos los reportes de dicho proyecto. Sólo incluirá el encabezado, la conclusión y el rendimiento. Desde la lista vas a poder abrir cualquier reporte</p>",
  reporte:
    "<h2>Estas haciendo un get a reporte, deseás ver un informe. Esta url debe incluir el id del reporte que deseas ver</h2><br /><p>Cuando pases el ID, el controlador hará una búsqueda en la base de datos y si lo encuentra te devolverá un json con la información. Esta ventana te mostrara el archivo en formato de lectura y te dará la opción de editar el documento, si es que el mismo no se encuentra cerrado.</p>",
};

/* RAIZ ---------------------------------------------------------- */
router.get("/", (req, res) => {
  res.send("Bienvenido al la api");
});

/* Rutas de PROYECTOS ----------------------------------------- */

// Ver todos los proyectos:

router.get("/proyectos", controllerProyecto.readAll);

// Ver un proyecto:

router.get("/proyecto/:num", controllerProyecto.readOne);

// CRUD proyecto:

router.post("/proyecto", controllerProyecto.create);
router.put("/proyecto/:num", controllerProyecto.update);
// router.delete("/proyecto/:num", controllerProyecto.delete);

/* rutas de REPORTES   -------------------------------------- */

/* Ver un reporte */
router.get("/reporte", (req, res) => {
  res.send(mensaje.reporte);
});

/*Guardar un reporte */
router.post("/reporte", (req, res) => {
  console.log("se ha recibido el siguiente mensaje: ");
  console.log(req.body);
  res.send("El reporte se ha almacenado con éxito");
});
module.exports = router;
