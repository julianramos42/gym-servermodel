import Client from "../../models/Client.js";
import Gym from "../../models/Gym.js";

async function update(req, res, next) {
    try {
        req.gym = req.user
        let gym = await Gym.findOne({ _id: req.gym._id })
        let auxClient = await Client.findOne({ dni: req.body.dni, gym_id: gym._id });
        if (auxClient) {
            auxClient.subscription_end.setMonth(auxClient.subscription_end.getMonth() + Number(req.body.months))
            let client = await Client.findOneAndUpdate(
                { dni: auxClient.dni, gym_id: gym._id },
                { subscription_end: auxClient.subscription_end },
                { new: true }
            );
            const now = new Date();
            const timeDiff = client.subscription_end - now;
            const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (client) {
                return res.status(201).json({
                    success: true,
                    message: `${client.name} te quedan ${daysLeft} días de suscripción`,
                    a: auxClient.subscription_end
                });
            }
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