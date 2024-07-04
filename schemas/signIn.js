import Joi from "joi-oid";

const schema = Joi.object({
    username: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.min": "El nombre debe contener al menos 3 caracteres",
            "string.max": "El nombre puede contener maximo 30 caracteres",
            'string.empty': 'El nombre no puede estar vacio',
            'any.required': 'Se necesita un nombre',
        }),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(20)
        .messages({
            "string.min": "La contraseña debe contener al menos 8 caracteres",
            "string.max": "La contraseña puede contener maximo 20 caracteres",
            'string.empty': 'La contraseña no puede estar vacia',
            'any.required': 'Se necesita una contraseña',
        })
})

export default schema;