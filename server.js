import express from "express";
import { readFile } from "fs/promises";

const app = express();
const PORT = 3000;

// Serve JSON on an endpoint
app.get("/users", async (req, res) => {
  try {
    const jsonData = await readFile("./users.json", "utf8");
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
  } catch (error) {
    res.status(500).json({ error: "Failed to read data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
