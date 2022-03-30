import {Knex} from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("article", (table) => {
        table.increments();
        table.string("article_name").notNullable();
        table.string("description");
        table.timestamps(false, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("article");
}