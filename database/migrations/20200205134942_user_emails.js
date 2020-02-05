exports.up = function (knex) {
    return knex.schema.table("users", table => {
        table.string("full_name")
            .notNullable()
            .index()
            .defaultTo("Default Dan")

        table.string("email")
            .notNullable()
            .index()
            .defaultTo("Default@this.is.an.error")
    })
};

exports.down = function (knex) {
    return knex.schema.table("users", table => {
        table.dropColumn("full_name")
        table.dropColumn("email")
    })
};
