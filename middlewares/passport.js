import passport from "passport"
import passportJwt from "passport-jwt"
import Gym from "../models/Gym.js"

passport.use(
    new passportJwt.Strategy({
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    },
        async (jwt_payload, done) => {
            try {
                let gym = await Gym.findOne({ _id: jwt_payload.id });
                if (gym) {
                    gym.password = null;
                    return done(null, gym);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                console.log(error);
                return done(error, false);
            }
        }
    )
)

export default passport