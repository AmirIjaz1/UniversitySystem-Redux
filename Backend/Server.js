const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const loginrouteUrls = require("./router/loginRouter")



const cors = require("cors")
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, db) => err ? console.log(err.name) : console.log("Success Connection"));

app.use(express.json())
app.use(cors())
app.use("/app/authentication", loginrouteUrls)
app.listen(4000, ()=> console.log("Server Is Runing"));

