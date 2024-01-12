const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();



app.use(cors());
// Body parser middleware
app.use(bodyParser.json());

app.use(routes);
// to handler cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// Routes
app.get('/', (req, res) => {
  res.send('expense tracker...');
});




// Start server
const PORT = 8000;
mongoose.connect("mongodb+srv://waseem:netixsol.93@netixsol.bvi8glx.mongodb.net/mern-app").then((db) => {
	app.listen(PORT, () => console.log("app is running on port 8000 and db connected"));
});
 