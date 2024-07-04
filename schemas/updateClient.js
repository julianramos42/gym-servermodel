import Joi from "joi-oid"

const schema = Joi.object({
    name: Joi
        .string()
        .min(2)
        .messages(
            {
                'string.min': 'El nombre debe contener al menos 2 caracteres',
                'string.empty': 'El nombre no puede estar vacio',
                'any.required': 'Se necesita un nombre',
            }
        ),
    lastname: Joi
        .string()
        .min(2)
        .messages(
            {
                'string.min': 'El apellido debe contener al menos 2 caracteres',
                'string.empty': 'El apellido no puede estar vacio',
                'any.required': 'Se necesita un apellido',
            }
        ),
    phone: Joi
        .string()
        // .pattern(/^\d{12}$/)
        .messages(
            {
                'string.empty': 'El telefono no puede estar vacio',
                'any.required': 'Se necesita un telefono',
            }
        ),
    dni: Joi
        .string()
        .required()
        .pattern(/^\d{7,8}$/)
        .messages({
            "string.pattern.base": "El DNI debe tener entre 7 y 8 dígitos",
            'any.required': 'Se necesita un DNI'
        }),
    plan: Joi
        .string()
        .min(2)
        .messages(
            {
                'string.min': 'El plan must be at least 2 characters',
                'string.empty': 'El plan cannot be empty',
                'any.required': 'Se necesita un plan',
            }
        ),
})

export default schema;