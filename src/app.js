import express from 'express';
import categoriesRoutes from './router/categories.routes.js';

const app = express();
app.use(express.json());
app.use(categoriesRoutes);

export default app;