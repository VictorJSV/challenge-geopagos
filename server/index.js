const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/api", (req, res) => {
  res.json({
    total: 24048.2,
    items: [
      {
        name: "Salmon Salad",
        quantity: 1,
        price: 289.2,
      },
      {
        name: "Chicken Mex Salad",
        quantity: 100,
        price: 23759.0,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
