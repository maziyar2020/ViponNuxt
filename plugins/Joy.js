import Joi from 'joi'

export const schemaMaker = (schema) => {
    return Joi.object(schema)
}

export const requiredString = (label) => {
    return Joi.string()
        .required()
        .messages({
            'string.empty': `پرکردن فیلد ${label} الزامیست`,
            'any.required': `پرکردن فیلد ${label} الزامیست`,
        })
}

export const requiredNumber = (label) => {
    return Joi.number()
        .required()
        .messages({
            'string.empty': `پرکردن فیلد ${label} الزامیست`,
            'any.required': `پرکردن فیلد ${label} الزامیست`,
        })
}

export const requiredStringMin = (label, min) => {
    return Joi.string()
        .required()
        .min(min)
        .messages({
            'string.empty': `پر کردن فیلد ${label} الزامیست`,
            'string.min': `${label} باید حداقل شامل ${min} حرف باشد`,
            'any.required': `پر کردن فیلد ${label} الزامیست`,
        })
}

export const requiredObject = (label) => {
    return Joi.object()
        .required()
        .messages({
            'any.required': `پرکردن فیلد ${label} الزامیست`,
            'object.required': `پرکردن فیلد ${label} الزامیست`,
        })
}

export const requiredMaxMin = (label, min, max) => {
    return Joi.string()
        .required()
        .min(min)
        .max(max)
        .messages({
            'any.required': `پر کردن فیلد ${label} الزامی است`,
            'string.min': `فیلد ${label} حداقل شامل ${min} کرکتر میباشد`,
            'string.max': `فیلد ${label} حداکثر شامل ${max} کرکتر میباشد`,
            'string.empty': `پر کردن فیلد ${label} الزامی است`
        })
}