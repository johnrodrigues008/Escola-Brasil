import { app } from "./app";

const port = 3000;

app.listen(port, () => {
  console.log(`🔥 Servidor rodando na porta http://localhost:${port}/`);
});
