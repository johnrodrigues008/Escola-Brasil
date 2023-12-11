import { Request, Response } from "express";
import { getSalas } from "../services/salasService";


export async function ListarSalas(_,res: Response) {
      try {
            const salas = await getSalas();

            if(salas.length <= 5){
                  return res.json('Maior que 6! haha');
            } else {
                  return res.json(salas);
            }

      } catch (error) {
            console.log(`error: ${error}`);
      }
}

