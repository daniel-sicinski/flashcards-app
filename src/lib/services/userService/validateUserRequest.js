const Joi = require("@hapi/joi");
const StatusError = require("../../utils/statusError");

const schema = Joi.object({
  userName: Joi.string()
    .min(1)
    .max(255)
    .required(),
  password: Joi.string()
    .min(1)
    .max(255)
    .required()
});

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) return next(new StatusError(error, 400));

  return next();
};
