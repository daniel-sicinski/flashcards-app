const { Router } = require("express");
const catchException = require("../lib/utils/catchException");
const router = Router();
const path = require("path");
const fs = require("fs");

router.get(
  "/:audioId",
  catchException((req, res) => {
    const { audioId } = req.params;

    const filePathEngWord = path.resolve(
      __dirname,
      "..",
      "assets",
      "mp3",
      `${audioId}.mp3`
    );

    const stat = fs.statSync(filePathEngWord);

    res.writeHead(200, {
      "Content-Type": "application/octet-stream",
      "Content-Length": stat.size
    });

    const readStream = fs.createReadStream(filePathEngWord);
    readStream.pipe(res);
  })
);

module.exports = router;
