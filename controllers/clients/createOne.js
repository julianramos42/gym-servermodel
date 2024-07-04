import Client from "../../models/Client.js";
import Gym from "../../models/Gym.js";

async function create(req, res, next) {
    try {
        req.gym = req.user
        let gym = await Gym.findOne({ _id: req.gym._id })

        if (gym) {
            const subscriptionEnd = new Date();
            subscriptionEnd.setMonth(subscriptionEnd.getMonth() + 1);
            req.body.subscription_end = subscriptionEnd;
            req.body.gym_id = gym._id;
            req.body.is_active = true;
            let client = await Client.create(req.body);
            
            if (client) {
                return res.status(201).json({
                    success: true,
                    message: 'Cliente Registrado'
                });
            }
            return res.status(404).json({
                success: false,
                message: 'Ocurrió un problema, intenta nuevamente'
            })
        }

        return res.status(404).json({
            success: false,
            message: 'Ocurrió un problema, intenta nuevamente'
        })

    } catch (err) {
        next(err);
    }
}

export default create;