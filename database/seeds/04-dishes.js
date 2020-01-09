exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        {
          id: 1,
          restaurant_id: "1",
          dish_name: "spaghetti",
          dish_rating: 3,
          dish_review: "it was ok"
        },
        {
          id: 2,
          restaurant_id: "2",
          dish_name: "burger",
          dish_rating: 5,
          dish_review: "it was great"
        },
        {
          id: 3,
          restaurant_id: "1",
          dish_name: "pizza",
          dish_rating: 4,
          dish_review: "quite good"
        }
      ]);
    });
};
