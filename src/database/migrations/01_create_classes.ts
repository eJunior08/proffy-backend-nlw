import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    /* Relacionamento da table com o usuario que da aula */
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE"); // Opção caso o professor seja deletado do banco
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("classes");
}
