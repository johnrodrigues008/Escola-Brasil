import { NextFunction, Request, Response } from "express";

export function AlunoMiddleware(req: Request, res: Response, next: NextFunction){
      const { nome, matricula, idSala } = req.body;

      if(nome === undefined && matricula === undefined && idSala === undefined){
            return res.json("Todos os campos devem ser preenchidos.");
      }

      if(nome === undefined){
            return res.json("O campo nome é obrigatório.");
      }

      if (matricula === undefined) {
        return res.json("O matricula nome é obrigatório.");
      }

      if (idSala === undefined) {
            return res.json("O campo idSala é obrigatório.");
      }

      next();
}