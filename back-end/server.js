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

app.post("/api/todolist/", async (req, res) => {
  try {
    await db.$queryRaw`insert into todolist (name, description, due_date) values (${req.body.name}, ${req.body.description}, ${req.body.due_date})`;
    res.send("Nouveau todo ajouté");
  } catch (error) {
    res.send(error);
  }
});

app.delete("/api/todolist/:id", async (req, res) => {
  try {
    await db.$queryRaw`delete from todolist where id = ${req.params.id}`;
    res.send(`Todo ${id} supprimé`);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});
