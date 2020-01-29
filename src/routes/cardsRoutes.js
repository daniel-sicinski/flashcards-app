const { Router } = require("express");
const { cardsService } = require("../lib/services");
const catchException = require("../lib/utils/catchException");
const router = Router();

router.get(
  "/",
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
