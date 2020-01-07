exports.up = function(knex) {
  return knex.schema.dropTable("restaurants");
};

exports.down = function(knex) {};
