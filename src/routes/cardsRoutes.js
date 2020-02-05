const { Router } = require("express");
const { cardsService } = require("../lib/services");
const catchException = require("../lib/utils/catchException");
const userIsLoggedIn = require("../lib/utils/userIsLoggedIn");
const router = Router();

router.get(
  "/",
  userIsLoggedIn,
  catchException(async (req, res) => {
    const cards = await cardsService.getCards();

    res.status(200).json({
      status: "success",
      data: {
        cards
      }
    });
  })
);

module.exports = router;
