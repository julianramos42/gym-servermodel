import Client from "../../models/Client.js"
import Gym from "../../models/Gym.js"

async function getAll(req, res, next) {
    try {
        let filter = {};
        if (req.query.name) {
            filter.name = new RegExp(req.query.name.trim(), "i");
        }
        if (req.query.lastname) {
            filter.lastname = new RegExp(req.query.lastname.trim(), "i");
        }
        if (req.query.dni) {
            filter.dni = req.query.dni;
        }
        if (req.query.plan) {
            filter.plan = new RegExp(req.query.plan.trim(), "i");
        }

        req.gym = req.user
        let gym = await Gym.findOne({ _id: req.gym._id })
        if (gym) {
            filter.gym_id = gym._id;
        } else {
            return res.status(404).json({
                success: false,
                clients: []
            });
        }

        let clients = await Client.find(filter).populate('gym_id', 'username');
        let cantClients = await Client.countDocuments(filter);
        if (clients) {
            return res.status(200).json({
                success: true,
                cantClients,
                clients
            })
        }

    } catch (err) {
        next(err);
    }
}

export default getAll;