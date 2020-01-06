exports.up = function(knex) {
  return knex.schema.table("restaurants", tbl => {
    tbl.string("zip", 5).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table("restaurants", tbl => {
    tbl.dropColumn("zip");
  });
};
