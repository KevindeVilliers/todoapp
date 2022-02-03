// Setup back end
require("dotenv").config();
const port = 3001;
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Loading prisma client
const Prisma = require("@prisma/client");
const db = new Prisma.PrismaClient();

// End points

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/todolist", async (req, res) => {
  const result = await db.$queryRaw`select * from todolist`;
  res.send(result);
});

app.post("/api/todolist", async (req, res) => {
  console.log(req.body.description);
  await db.$queryRaw`insert into todolist (name, description) values (${req.body.name}, ${req.body.description})`;
  res.send("Nouveau todo ajouté");
});

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});
