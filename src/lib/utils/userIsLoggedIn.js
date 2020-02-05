const StatusError = require("./statusError");

module.exports = (req, res, next) => {
  console.log("Request session:");
  console.log(req.session);
  if (req.session && req.session.userId) return next();
  return next(new StatusError("Unauthorized", 401));
};
