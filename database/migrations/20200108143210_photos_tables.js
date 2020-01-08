exports.up = function(knex) {
  return knex.schema

    .createTable("restaurant_photos", tbl => {
      tbl.increments();
      tbl
        .integer("restaurant_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("restaurants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("restaurant_image_url", 128).notNullable();
    })

    .createTable("dish_photos", tbl => {
      tbl.increments();
      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("dish_image_url", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("restaurant_photos")
    .dropTableIfExists("dish_photos");
};
