import Client from "../../models/Client.js";
import Gym from "../../models/Gym.js";

async function destroy(req, res, next) {
    try {
        req.gym = req.user
        let gym = await Gym.findOne({ _id: req.gym._id })
        let client = await Client.findOneAndDelete({ dni: req.body.dni, gym_id: gym._id });

        if (client) {
            return res.status(201).json({
                success: true,
                message: 'Cliente Eliminado'
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

export default destroy;