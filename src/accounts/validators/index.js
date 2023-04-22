import Joi from 'joi';

//password: Joi.string().min(7).max(20).required().regex(/^(?=.\*[0-9])(?=.\*[a-z])(?=.\*[A-Z])(?=.\*[@#$%^&-+=()])(?=\\S+$).{7, 20}$/),
const accountSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    //password: Joi.string().min(7).max(20).required().regex(/^(?=.\*[0-9])(?=.\*[a-z])(?=.\*[A-Z])(?=.\*[@#$%^&-+=()])(?=\\S+$).{7, 20}$/),
    firstName: Joi.string().min(1).max(30).required(),
    lastName: Joi.string().min(1).max(30).required()
});

export default {account: accountSchema};
