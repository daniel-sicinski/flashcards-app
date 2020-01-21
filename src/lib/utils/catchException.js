module.exports = requestHandler => (req, res, next) => {
  Promise.resolve(requestHandler(req, res)).catch(next);
};
