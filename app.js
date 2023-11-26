const express = require("express")
const app = express(); // Crea una instancia de ExpressJS
const path = require("path");
const port = 3001;
const render = require("./render.js")
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

app.use(express.json()); // Permite que el servidor analice el cuerpo de las peticiones como JSON
app.use(express.static(path.join(__dirname, 'Public')));
app.use(bodyParser.json());

const users = [
  { id: 1, email: 'admin', password: 'admin' },
  { id: 2, email: 'usuario', password: 'contrasena' },
];

function verificarToken(req, res, next) {
  const token = req.headers['authorization'] || req.headers['Authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  // Verificar el token
  jwt.verify(token, 'secreto', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    // Agregar la información del usuario al objeto de solicitud para su uso posterior en las rutas protegidas
    req.user = decoded;
    next();
  });
}


render(app, './views')
// Ruta protegida con el middleware de autorización
app.use('/cart', verificarToken);
// Ruta de ejemplo que requiere autorización
app.get('/cart', (req, res) => {
  // Accede a la información del usuario desde req.user
  res.json({ message: 'Acceso permitido a la ruta /cart', user: req.user });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    res.status(401).json({ message: "Usuario y/o contraseña incorrecto(s). Por favor, reintente." });
  } 
  const token = jwt.sign({ userId: user.id, email: user.email }, 'secreto', { expiresIn: '1h' });
    res.status(200).json({ token });
});

app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "./views/index.html");

    res.sendFile(indexPath);
  });


  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });

