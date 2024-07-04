import express from 'express'
//schemas
import createSchema from '../schemas/createClient.js'
import updateSchema from '../schemas/updateClient.js'
//middlewares
import exists from '../middlewares/clients/exists.js'
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'
// controllers
import getAll from '../controllers/clients/getAll.js'
import create from '../controllers/clients/createOne.js'
import enterToTheGym from '../controllers/clients/enterToTheGym.js'
import update from '../controllers/clients/update.js'
import addMonths from '../controllers/clients/addMonths.js'
import destroy from '../controllers/clients/deleteOne.js'

let router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), getAll)
router.post('/create', passport.authenticate('jwt', { session: false }), validator(createSchema), exists, create)
router.get('/enter', passport.authenticate('jwt', { session: false }), enterToTheGym)
router.put('/update', passport.authenticate('jwt', { session: false }), validator(updateSchema), update)
router.put('/months', passport.authenticate('jwt', { session: false }), addMonths)
router.delete('/delete', passport.authenticate('jwt', { session: false }), destroy)

export default router;