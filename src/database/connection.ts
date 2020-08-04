import knex from "knex";
import path from "path";

// migrations - controlam a versão do banco de dados

// Database
const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"), // __dirname: Diretorio atual
  },
  useNullAsDefault: true, // Deixa os campos vazios como null
});

export default db;
