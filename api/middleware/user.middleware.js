const userValidation = (req, res, next) => {
  req.userId = "pradeep";
  return next();
};

module.exports = {
  userValidation,
};
