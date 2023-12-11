import { Router } from "express";
import { ListarSalas } from "../controllers/SalasController";

const salas = Router();

salas.get("/salas", ListarSalas);

export { salas }; 