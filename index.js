const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 3000;

router.post("/login", (req, res) => {
  const { password, email } = req.body;

  if (password.length == 8) {
    res.send("La contraseña debe tener 8 caracteres.");
  } else if (!password && !email) {
    res.send("Credenciales invalida");
  }
  console.log("Inicio de sesion exitoso");
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  res.send("Bienvenido a mi pagina");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
