
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', tbl => {
    tbl.increments();
    tbl.string('name', 255)
      .notNullable()
      .unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('categories');
};