const express = require("express");
const cors = require("cors");
const { calculateFootprint } = require("./utils/footprintLogic");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/calculator", (req, res) => {
  const total = calculateFootprint(req.body);
  res.json({ total });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`EcoTrack backend running on port ${PORT}`));
