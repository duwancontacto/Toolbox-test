const express = require("express");
const routes = require("./Routes/index.js");
const cors = require("cors");
const app = express();

// Active Request body
app.use(express.json({extended: true}));

app.use(cors());

routes(app);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server on ${port}`);
});

module.exports = app;
