import express from "express";

const app = express();
const PORT = 3000;

const users = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "C",
  },
  {
    id: 4,
    name: "D",
  },
];

app.get("/", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
