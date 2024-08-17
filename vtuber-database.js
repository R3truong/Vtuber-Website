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
let jsonVtuber;
const app = express(),
  port = 3000;
app.use(cors());
let id;
client.connect();

// client.query('SELECT * from vtuber WHERE "ID" = 1');

app.get("/vtuber", (req, res) => {
  id = client.query(`SELECT * FROM vtuber`, (err, res) => {
    id = Math.floor(Math.random() * res.rowCount) + 1;
  });
  client.query(`SELECT * from vtuber WHERE "ID" = ${id}`, (err, res) => {
    if (!err) {
      const vtuberData = res.rows[0];
      jsonVtuber = {
        name: vtuberData.Name,
        agency: vtuberData.Agency,
        channel: vtuberData.Channel,
        face: vtuberData.Face,
        body: vtuberData.Body,
      };
    } else {
      console.log(err.message);
    }
    client.end;
  });
  res.send(jsonVtuber);
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});

//   client.query('SELECT * from vtuber WHERE "ID" = 1', (error, result) => {
//     if (error) {
//       console.error("Error querying database: ", error.stack);
//     } else {
//       const vtuberData = result.rows[0];
//       let vtuberJson = {
//         name: vtuberData.Name,
//         agency: vtuberData.Agency,
//         channel: vtuberData.Channel,
//         face: vtuberData.Face,
//         body: vtuberData.Body,
//       };
//       res.send(JSON.stringify(vtuberJson));
//     }
//   });
