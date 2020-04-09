const express = require("express");
const app = express();
const cors = require("cors");

// Parseo JSON
app.use(express.json());

// Headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", 'POST, GET, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors({origin: true}));

// Rutas
app.use("/", require("./routes/index"));
app.use("/api", require("./routes/api"));

// Conexion
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`El servidor ha comenzado a correr en el puerto ${PORT}`);
});
