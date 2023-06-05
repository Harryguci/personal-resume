const express = require("express");
const pino = require("express-pino-logger")();
const app = express();
const path = require("path");
const router = require("./routers/");
const bodyParser = require("body-parser");
const dp = require(path.join(__dirname, "config", "db", "Connect"));
const port = 3001;

// connect to the database
dp.run();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(pino);

app.use("/", router);

app.listen(port, () =>
  console.log(`Express server is running on http://localhost:${port}`)
);
