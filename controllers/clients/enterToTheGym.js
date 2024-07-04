import Client from "../../models/Client.js";
import Gym from "../../models/Gym.js";

async function enter(req, res, next) {
    try {
        req.gym = req.user
        let gym = await Gym.findOne({ _id: req.gym._id })
        let client = await Client.findOne({ dni: req.body.dni, gym_id: gym._id });
        if (client) {
            const now = new Date();
            if (now > client.subscription_end) {
                await Client.findOneAndUpdate(
                    { dni: client.dni },
                    { is_active: false }
                )
                return res.status(400).json({
                    success: false,
                    message: 'Su suscripción ha caducado'
                })
            }
            const timeDiff = client.subscription_end - now;
            const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

            return res.status(200).json({
                success: true,
                message: `${client.name}, te quedan ${daysLeft} días de suscripción`
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

export default enter;