import express from 'express'
// schemas
import signUpSchema from '../schemas/signUp.js'
import signInSchema from '../schemas/signIn.js'
// middlewares
import alreadyRegister from '../middlewares/gyms/alreadyRegister.js'
import exists from '../middlewares/gyms/exists.js'
import correctPassword from '../middlewares/gyms/correctPassword.js'
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'
// controllers
import controller from '../controllers/gyms/auth.js'

const {signUp, signIn, signOut} = controller;

let router = express.Router();

router.post('/signup', validator(signUpSchema), alreadyRegister, signUp);
router.get('/signin', validator(signInSchema), exists, correctPassword, signIn);
router.get('/signout', passport.authenticate('jwt',{session:false}), signOut);

export default router;