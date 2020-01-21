const Joi = require("@hapi/joi");
const StatusError = require("../../utils/statusError");

const schema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(255)
    .required(),
  cardsIds: Joi.array()
    .items(Joi.string())
    .min(1)
    .required()
});

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) return next(new StatusError(error, 400));

  return next();
};
