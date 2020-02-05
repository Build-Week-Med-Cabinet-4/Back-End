exports.seed = function (knex) {
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        { strain: "Nuclear War Cube", user_id: 1 },
        { strain: "Gamer Fuel", user_id: 1 },
        { strain: "Dogg's Select", user_id: 1 },
      ]);
    });
};
