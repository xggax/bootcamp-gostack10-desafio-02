import { Router } from 'express';

// Controllers
import SessionController from './app/controllers/SessionController';

// Middlewares
import authMiddlaware from './app/middlewares/auth';

const routes = new Router();

/* Routes */

routes.post('/sessions', SessionController.store);

routes.use(authMiddlaware);

export default routes;
