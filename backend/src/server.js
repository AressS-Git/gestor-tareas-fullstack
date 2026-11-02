import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

// Instanciar express
const app = express();

// Puerto por defecto
const PORT = process.env.PORT || 5001;

// Middlewares globales
app.use(cors());          // Permite peticiones desde otros dominios
app.use(express.json());   // Parsea el cuerpo de las peticiones en formato JSON
app.use('/api/tasks', taskRoutes); // Usar las rutas de tareas

// Ruta de prueba para verificar que el servidor responde
app.get('/', (req, res) => {
  res.json({ message: 'API del Gestor de Tareas funcionando correctamente' });
});

// Poner a escuchar al servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto http://localhost:${PORT}`);
});