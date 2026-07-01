module.exports = async function auth(req, res, next) {
  req.user = {
    id: "test-user"
  };

  next();
};
