exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          id: 1,
          user_id: 1,
          restaurant_name: "Gold Standard Cafe",
          city: "philly",
          state: "PA",
          zip: "19143",
          street_address: "Baltimore Ave",
          cuisine: "Cafe"
        },
        {
          id: 2,
          user_id: 2,
          restaurant_name: "Manakeesh",
          city: "Philly",
          state: "PA",
          zip: "19152",
          street_address: "Walnut St",
          cuisine: "Middle Eastern"
        },
        {
          id: 3,
          restaurant_name: "Santucci's",
          user_id: 2,
          city: "philly",
          state: "PA",
          zip: "19112",
          street_address: "South Philly",
          cuisine: "pizza"
        }
      ]);
    });
};
