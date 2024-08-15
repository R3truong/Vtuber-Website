const { Client } = require("pg");
const express = require("express");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "password",
  database: "vtuberdatabase",
});
const app = express(),
  port = 3000;

client.connect();

app.get("api/vtuber", (req, res) => {
  client.query('SELECT * from vtuber WHERE "ID" = $1', (error, result) => {
    if (error) {
      console.error("Error querying database: ", error.stack);
      result.status(500).send("Server Error");
    } else {
      const vtuberData = result.rows[0];
      res.json({
        name: vtuberData.Name,
        agency: vtuberData.Agency,
        channel: vtuberData.Channel,
        face: vtuberData.Face,
        body: vtuberData.Body,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
