const express = require('express');
const app = express();

const PORT = 12619;

// Host static assets
app.use("/", express.static(`styles`));

// Serve it up
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));