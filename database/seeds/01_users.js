exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "rasha",
          email: "rasha@rasha.org",
          password: "123456",
          city: "philly",
          state: "PA"
        },
        {
          id: 2,
          username: "mara",
          email: "mara@mara.org",
          password: "12345678",
          city: "philly",
          state: "PA"
        },
        {
          id: 3,
          username: "rebecca",
          email: "rebecca@rebecca.org",
          password: "09876545",
          city: "philly",
          state: "PA"
        }
      ]);
    });
};
