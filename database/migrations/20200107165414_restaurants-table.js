exports.up = function(knex) {
  return knex.schema

    .createTable("restaurants", tbl => {
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
      tbl.string("cuisine", 128);
      tbl.string("street_address").notNullable();
      tbl.string("city").notNullable();
      tbl.string("state").notNullable();
      tbl.string("zip", 5).notNullable();
    })

    .createTable("restaurant_reviews", tbl => {
      tbl.increments();
      tbl
        .integer("restaurant_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("restaurants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.date("visit_date").notNullable();
      tbl.text("review", 500).notNullable();
      tbl.float("rating", 3, 1).notNullable();
    })

    .createTable("dishes", tbl => {
      tbl.increments();
      tbl
        .integer("restaurant_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("restaurants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("name", 128).notNullable();
      tbl.float("price", 4, 2);
      tbl.float("rating", 3, 1).notNullable();
      tbl.text("review", 500);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("restaurants")
    .dropTableIfExists("restaurant_reviews")
    .dropTableIfExists("dishes");
};
