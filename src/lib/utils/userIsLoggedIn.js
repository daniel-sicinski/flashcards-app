const StatusError = require("./statusError");

module.exports = (req, res, next) => {
  if (req.session && req.session.userId) return next();
  return next(new StatusError("Unauthorized", 401));
};
