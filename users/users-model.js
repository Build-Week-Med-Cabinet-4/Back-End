const db = require("../database/dbConfig.js");

module.exports = {
    getBy,
    getById,
    insert
}

function getBy(filter) {
    return db("users")
        .where(filter)
}

function getById(id) {
    return db("users as u")
        .select("u.id, u.username") //DON'T send people the hash.
        .where({ id })
        .first();
}

function insert(user) {
    return db("users")
        .insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return getById(id)
        })
} 