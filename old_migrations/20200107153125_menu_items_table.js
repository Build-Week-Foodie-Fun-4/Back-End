exports.up = function(knex) {
  return knex.schema
    .dropTable("menu_item_reviews")
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
      tbl.string("item_name", 128).notNullable();
      tbl.float("price", 4, 2);
      tbl.float("rating", 3, 1).notNullable();
      tbl.text("review", 500);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("dishes");
};
