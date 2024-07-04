import Client from "../../models/Client.js"
import Gym from "../../models/Gym.js"

async function exists(req, res, next) {
    req.gym = req.user
    let gym = await Gym.findOne({ _id: req.gym._id })
    const client = await Client.findOne({ dni: req.body.dni, gym_id: gym._id })
    if (client) {
        return res.status(400).json({
            success: false,
            message: 'Cliente ya registrado'
        })
    }
    next()
}

export default exists