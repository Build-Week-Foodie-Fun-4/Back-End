exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("restaurant_reviews")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("restaurant_reviews").insert([
        {
          id: 1,
          restaurant_id: "1",
          visit_date: "January 10, 2020",
          restaurant_review: "It was ok",
          restaurant_rating: "3"
        },
        {
          id: 2,
          restaurant_id: "2",
          visit_date: "December 4, 2019",
          restaurant_review: "Wow amazing",
          restaurant_rating: "5"
        },
        {
          id: 3,
          restaurant_id: "3",
          visit_date: "July 23, 2019",
          restaurant_review: "pretty good",
          restaurant_rating: "3"
        }
      ]);
    });
};
