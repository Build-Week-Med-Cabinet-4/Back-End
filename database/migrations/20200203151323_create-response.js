exports.up = function (knex) {
    return knex.schema.createTable("responses", table => {
        table.increments()

        table.string("strain", 255)
            .notNullable()
            .unique()
            .index()

        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("responses");
};
