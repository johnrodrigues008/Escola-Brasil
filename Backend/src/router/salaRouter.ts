import { Router } from "express";
import { SalaModel } from "../models/salasModel";
import { v4 } from "uuid";

const salas = Router();

salas.get("/salas", async (req, res) => {
  // Service
  await SalaModel.create({
    idSala: v4(),
    nome: "Sala de Matematica",
    numero: "7",
    ano: "2° B",
  });
  
  return res.send("Rota de salas ativas!");

});

export { salas };