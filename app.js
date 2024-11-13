import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controllers.js";

dotenv.config()
mongoose.connect(process.env.url_bd)
.then(()=>{
    console.log("Funciona la Base de Datos")
})
.catch((error)=>{
    console.log("No funciona ya salio", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor")
})
test()