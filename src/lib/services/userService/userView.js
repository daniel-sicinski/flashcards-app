module.exports = user => {
  return {
    userName: user.userName,
    userId: user._id
  };
};
