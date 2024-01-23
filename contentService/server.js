const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models");

db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to Database successfully !!!");
  })
  .catch(() => {
    console.log("Failed to connect database !!!");
    process.exit();
  });

require("./app/routes/content.routes")(app);
app.listen(8084, () => {
  console.log(`Content service listening on port 8084`);
});

app.get("/check", (req, res) => {
  res.json({ message: "Welcome to the express js with mongodb " });
});

