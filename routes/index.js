import express from 'express'
import gymRouter from './gyms.js'

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', gymRouter);

export default router;