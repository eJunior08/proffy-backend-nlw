import Knex from "knex";

// O knex vai rodar o migrations e vai tentar procurar dois metodos: up e down

// Quais alterações quero fazer no BD
export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

// Se deu pau, o que faz pra voltar
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
