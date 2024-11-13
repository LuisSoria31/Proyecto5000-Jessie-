import { modelo1 } from "../models/alumno.model.js";

modelo1.create({
    name: "El choyas"
})

export const test = () =>{
    console.log("Si funciona el controlador")
}