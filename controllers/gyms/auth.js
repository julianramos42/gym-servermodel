import Gym from '../../models/Gym.js'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

const controller = {
    signUp: async (req, res, next) => {
        try {
            req.body.is_active = true;
            req.body.password = bcryptjs.hashSync(req.body.password, 10);

            const gym = await Gym.create(req.body);
            if(gym){
                return res.status(201).json({
                    success: true,
                    message: 'Gimnasio Registrado'
                });
            }else{
                return res.status(404).json({
                    success: false,
                    message: 'Ocurrió un problema, intenta nuevamente'
                })
            }
        } catch (err) {
            next(err);
        }
    },

    signIn: async (req, res, next) => {
        try {
            let gym = await Gym.findOne({ username: req.gym.username });
            let formatedGym = {
                username: gym.username,
                email: gym.email,
                is_active: gym.is_active
            };

            const token = jsonwebtoken.sign(
                { id: gym._id },
                process.env.SECRET,
                { expiresIn: 60 * 60 * 24 * 7 }
            );

            return res.status(200).json({
                success: true,
                message: 'Sesión Iniciada',
                gym: formatedGym,
                token
            });
        } catch (err) {
            next(err);
        }
    },

    signOut: async (req, res, next) => {
        req.gym = req.user
        try {
            let gym = await Gym.findOne({ username: req.gym.username });
            if (gym) {
                return res.status(200).json({
                    success: true,
                    message: 'Sesión Cerrada'
                });
            };
        } catch (err) {
            next(err);
        }
    }
}

export default controller;