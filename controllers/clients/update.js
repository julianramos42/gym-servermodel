import Client from "../../models/Client.js";
import Gym from "../../models/Gym.js";

async function update(req, res, next) {
    try {
        req.gym = req.user
        let gym = await Gym.findOne({ _id: req.gym._id })
        let client = await Client.findOneAndUpdate(
            { dni: req.body.dni, gym_id: gym._id },
            req.body
        );

        if (client) {
            return res.status(201).json({
                success: true,
                message: 'Cliente Actualizado'
            });
        }
        return res.status(404).json({
            success: false,
            message: 'Cliente no encontrado'
        })

    } catch (err) {
        next(err);
    }
}

export default update;