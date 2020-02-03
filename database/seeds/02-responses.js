exports.seed = function (knex) {
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        { strain: "Nuclear War Cube" },
        { strain: "Gamer Fuel" },
        { strain: "Dogg's Select" },
      ]);
    });
};
