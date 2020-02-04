const express = require('express');
const app = express();

const PORT = 12619;

// Host static assets
app.use("/", express.static(`src`));

// Serve it up
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));