const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`El servidor ha comenzado a correr en el puerto ${PORT}`);
});
