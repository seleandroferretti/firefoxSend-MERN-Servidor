const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

// crear servidor
const app = express();

// conectar a la BD
conectarDB();

// habilitar cors
const opcionesCors = {
  origin: process.env.FRONTEND_URL,
};
app.use(cors(opcionesCors));

console.log("Comenzando Node Send");

// puerto de la app
const port = process.env.PORT || 4000;

// habilitar leer los valores de un body
app.use(express.json());

// habilitar carpeta publica
app.use(express.static('uploads'));

// rutas de la app
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/enlaces", require("./routes/enlaces"));
app.use("/api/archivos", require("./routes/archivos"));

// arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
