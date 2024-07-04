import bcryptjs from 'bcryptjs'

function passwordIsOk(req, res, next) {
    const db_pass = req.gym.password
    const form_pass = req.body.password
    if (bcryptjs.compareSync(form_pass,db_pass)) {
        return next()
    }
    return res.status(400).json({
        succes: false,
        message:'Datos Incorrectos'
    })
}

export default passwordIsOk