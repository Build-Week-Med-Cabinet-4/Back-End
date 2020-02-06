exports.up = function (knex) {
    return knex.schema.createTable("user-strains", table => {
        table.increments()

        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table.integer("strain_id")
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("user-strains")
};
