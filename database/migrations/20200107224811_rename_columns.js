exports.up = function(knex) {
  return knex.schema

    .table("restaurants", tbl => {
      tbl.renameColumn("name", "restaurant_name");
    })

    .table("restaurant_reviews", tbl => {
      tbl.renameColumn("review", "restaurant_review");
      tbl.renameColumn("rating", "restaurant_rating");
    })

    .table("dishes", tbl => {
      tbl.renameColumn("name", "dish_name");
      tbl.renameColumn("rating", "dish_rating");
      tbl.renameColumn("review", "dish_review");
    });
};

exports.down = function(knex) {};
