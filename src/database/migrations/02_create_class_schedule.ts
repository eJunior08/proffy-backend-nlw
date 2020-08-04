import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("class_schedule", (table) => {
    table.increments("id").primary();

    table.integer("week_day").notNullable(); // 0: DOMINGO; 6: SÁBADO;
    table.integer("from").notNullable(); // Que horas começa a trabalhar
    table.integer("to").notNullable(); // Que horas termina de trabahar

    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("class_schedule");
}
