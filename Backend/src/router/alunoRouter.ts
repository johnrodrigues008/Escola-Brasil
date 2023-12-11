import { Router } from "express";

const router = Router();

router.get('/alunos', (req, res) =>{
      return res.send('Rota de alunos ativa!');
})

export { router };