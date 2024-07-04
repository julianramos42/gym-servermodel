import express from 'express'
import gymsRouter from './gyms.js'
import clientsRouter from './clients.js'

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', gymsRouter);
router.use('/clients', clientsRouter);

export default router;