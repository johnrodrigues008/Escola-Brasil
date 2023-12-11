import { Router } from "express";

const salas = Router();

salas.get("/salas", (req, res) => {
  return res.send("Rota de salas ativas!");
});

export { salas };
