const express = require("express")
const app = express(); // Crea una instancia de ExpressJS
const path = require("path");
const port = 3001;
const render = require("./render.js")

app.use(express.json()); // Permite que el servidor analice el cuerpo de las peticiones como JSON
app.use(express.static(path.join(__dirname, 'Public')));

app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "./views/index.html");

    res.sendFile(indexPath);
  });

render(app, './views')

  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });