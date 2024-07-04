import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        username: {type: String, required: true},
        email : {type: String, required: true},
        password: { type: String, required: true },
        is_active: { type: Boolean, required: true },
    },{
        timestamps: true
    }
)

const Gym = mongoose.model('gyms', schema)
export default Gym