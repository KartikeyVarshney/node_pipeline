const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  const api = "https://dog.ceo/api/breeds/image/random";

  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result)
    res.send(`<div style="height:100vh; width:100vw; display:grid; place-items:center">
      <img src=${result.message} style="height:500px ; width:500px" />
      </div>
      `);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Failed to fetch data" });
  }
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Server is online at http://localhost:5000");
  }
});
