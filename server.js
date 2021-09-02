const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const teacherRouter = require('./models/Teacher/TeacherController');
app.use("/teacher",teacherRouter);
// app.post("/teacher",(req,res)=>{
//     console.log(req.body.name);
//     res.send("ok")
// });

//database connection
require('./models/mongoDB')

app.listen(PORT,() => {
    console.log("Server is up on port " + PORT)
    console.log(URL);
});