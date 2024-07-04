import Gym from '../../models/Gym.js'

async function alreadyRegister(req, res, next) {
    const gym = await Gym.findOne({ username: req.body.username })
    if (gym) {
        return res.status(400).json({
            success: false,
            message: `El gimnasio ${gym.username} ya se encuentra registrado`
        })
    }
    return next()
}

export default alreadyRegister