const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mystudent", { useNewUrlParser: true });
app.use(routes);
// app.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
