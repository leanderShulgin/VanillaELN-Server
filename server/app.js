const express = require("express");
const app = express();

// Parseo JSON
app.use(express.json());

// Headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Rutas
app.use("/", require("./routes/index"))
app.use("/api", require("./routes/api"))

// Conexion
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`El servidor ha comenzado a correr en el puerto ${PORT}`);
});
