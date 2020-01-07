exports.up = function(knex) {
  return knex.schema.createTable("restaurants", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.string("name", 128).notNullable();
    tbl.string("cuisine", 128).notNullable();
    tbl.string("street_address").notNullable();
    tbl.string("city").notNullable();
    tbl.string("state").notNullable();
    tbl.string("zip", 5).notNullable();
  });
};

exports.down = function(knex) {};
