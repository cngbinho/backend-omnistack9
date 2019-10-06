const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect("mongodb://localhost:27017/mongoaircnc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// req.query = acessar query params (para filtro)
// req.params = acessar acessar route params (para edição e delete)
// req.body = acessar corpo da requisição (para ciração e edição)

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3330);
