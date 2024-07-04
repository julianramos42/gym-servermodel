import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
        phone: { type: String, required: true },
        dni: { type: Number, required: true },
        plan: { type: String, required: true },
        subscription_end: { type: Date, required: true },
        gym_id: { type: mongoose.Types.ObjectId, ref: 'gyms', required: true },
        is_active: { type: Boolean, required: true }
    }, {
    timestamps: true
}
)

const Client = mongoose.model('clients', schema);
export default Client;