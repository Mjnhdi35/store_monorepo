import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('products', (table) => {
    table.text('description').nullable();
    table.string('image').nullable();
    table.timestamps(true, true); // adds created_at and updated_at
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('products', (table) => {
    table.dropColumn('description');
    table.dropColumn('image');
    table.dropTimestamps();
  });
}
