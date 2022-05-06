const dotenv = require("dotenv");
const express = require("express");
const app = express();

const cors = require("cors");
const PORT = 8000 || process.env.PORT;

dotenv.config({ path: "./.env" });

app.use(cors());

app.use(require("./Routes/routes"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
