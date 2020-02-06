const { Router } = require("express");
const { userService } = require("../lib/services");
const validateUserRequest = require("../lib/services/userService/validateUserRequest");
const userView = require("../lib/services/userService/userView");
const catchException = require("../lib/utils/catchException");
const userIsLoggedIn = require("../lib/utils/userIsLoggedIn");
const router = Router();

router.post(
  "/users",
  validateUserRequest,
  catchException(async (req, res) => {
    const { userName, password } = req.body;

    const user = await userService.register(userName, password);

    req.session.userId = user._id;
    res.status(201).json(userView(user));
  })
);

router.get(
  "/users/is-logged",
  userIsLoggedIn,
  catchException(async (req, res) => {
    const user = await userService.getUser(req.session.userId);
    res.status(200).json(userView(user));
  })
);

router.post(
  "/login",
  validateUserRequest,
  catchException(async (req, res) => {
    const { userName, password } = req.body;

    const user = await userService.login(userName, password);
    req.session.userId = user._id;
    res.status(200).json(userView(user));
  })
);

router.get(
  "/logout",
  catchException(async (req, res) => {
    await req.session.destroy();
    res.status(204).end();
  })
);

module.exports = router;
