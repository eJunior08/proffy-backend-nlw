import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// Habilita que o back tenha requisições de outros endereços
app.use(cors());
// Por padrao, express nao entende json, é necessario utilizar a linha abaixo
app.use(express.json());
app.use(routes); // Rotas da aplicação

// Corpo (Request Body): dados para criar ou atualizar
// Route params: Identificar qual recurso quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

/* .listen(PORTA): Faz a aplicação ouvir endereço/requisição HTTP */
app.listen(3333);
