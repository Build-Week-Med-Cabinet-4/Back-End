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
    return db("users")
    .where({id})
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