const { Client } = require("pg");
const express = require("express");
const cors = require("cors");
Math.random();

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "password",
  database: "vtuberdatabase",
});
const app = express(),
  port = 3000;
app.use(cors());
client.connect();

app.get("/vtuber", async (req, res) => {
  const allVtubersResult = await client.query("SELECT * FROM vtuber");
  const allVtubers = allVtubersResult.rows;

  const randomIndex = Math.floor(Math.random() * allVtubers.length);
  const selectedVtuber = allVtubers[randomIndex];
  console.log(selectedVtuber);
  const jsonVtuber = {
    name: selectedVtuber.Name,
    agency: selectedVtuber.Agency,
    channel: selectedVtuber.Channel,
    face: selectedVtuber.Face,
    body: selectedVtuber.Body,
  };
  client.close;
  res.send(jsonVtuber);
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
