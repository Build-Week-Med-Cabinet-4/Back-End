const db = require("../database/dbConfig.js");

module.exports = {
    get,
    getBy,
    getById,
    add
}

function get() {
    return db("users as u")
        .select("u.id", "u.username", "u.email", "u.full_name")
}

function getBy(filter) {
    return db("users")
        .where(filter)
}

function getById(id) {
    return db("users as u")
        .select("u.id", "u.username", "u.email", "u.full_name") //DON'T send people the hash.
        .where({ id })
        .first();
}

function add(user) {
    return db("users")
        .insert(user)
        .then(ids => {
            const [id] = ids;
            return getById(id)
        })
} 