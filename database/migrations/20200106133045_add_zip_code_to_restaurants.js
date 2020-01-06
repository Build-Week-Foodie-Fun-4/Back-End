exports.up = function(knex) {
  return knex.schema.table("restaurants", tbl => {
    tbl.string("zip", 5);
  });
};

exports.down = function(knex) {
  return knex.schema.table("restaurants", tbl => {
    tbl.dropColumn("zip");
  });
};
