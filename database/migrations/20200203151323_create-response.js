exports.up = function (knex) {
    return knex.schema.createTable("responses", table => {
        table.increments()

        table.string("strain", 255)
            .notNullable()
            .unique()
            .index()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("responses");
};
