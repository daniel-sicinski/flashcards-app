const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

const initialCardData = [];

(function generateInitialCardData() {
  csvData = fs.readFileSync(
    path.join(__dirname, "temp_data", "result_1_30.csv"),
    "utf-8"
  );
  const dataRows = csvData.split("\n");
  dataRows.slice(1).forEach((row, index) => {
    index = index + 1;
    const cardData = {};
    const expressions = row.split(",");
    const audioIdIndex = index < 10 ? `000${index}` : `00${index}`;

    cardData._id = index;
    cardData.expressions = {
      engWord: expressions[0],
      polWord: expressions[1],
      engSen: expressions[2],
      polSen: expressions[3]
    };

    cardData.audioIds = {
      engWord: "s" + audioIdIndex,
      polWord: "p" + audioIdIndex,
      engSen: "z" + audioIdIndex,
      polSen: "t" + audioIdIndex
    };

    initialCardData.push(cardData);
  });
})();

app.get("/api/v1/cards", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      cards: initialCardData
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
