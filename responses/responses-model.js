const db = require("../database/dbConfig.js");

module.exports = {
    get,
    getBy,
    getById,
    add
}

function get() {
    return db("responses as r")
        .select("r.id", "r.strain")
}

function getBy(filter) {
    return db("responses")
        .where(filter)
}

function getById(id) {
    return db("responses as r")
        .select("r.id", "r.strain") //DON'T send people the hash.
        .where({ id })
        .first();
}

function add(response) {
    return db("responses")
        .insert(response)
        .then(ids => {
            const [id] = ids;
            return getById(id)
        })
} 