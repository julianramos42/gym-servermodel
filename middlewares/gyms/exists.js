import Gym from '../../models/Gym.js'

async function exists(req,res,next) {
    const gym = await Gym.findOne({username: req.body.username})
    if (gym) {
        req.gym = {
            id: gym._id,
            username: gym.username,
            email: gym.email,
            password: gym.password,
        }
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'Datos Incorrectos'
    })
}

export default exists