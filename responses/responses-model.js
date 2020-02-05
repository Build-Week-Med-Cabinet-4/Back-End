const db = require("../database/dbConfig.js");

module.exports = {
    get,
    getBy,
    getById,
    add,
    remove,
    update
}

function get() {
    return db("responses as r")
        .select("r.id", "r.strain", "r.user_id")
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

function remove(id) {
    return db("responses")
        .delete()
        .where({ id })
}

function update(id, newResponse) {
    return db("responses")
        .update(newResponse)
        .where({ id })
}