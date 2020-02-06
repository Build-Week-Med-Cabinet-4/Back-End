const db = require("../database/dbConfig.js");
const axios = require("axios");

module.exports = {
    add,
    getStrainByUserId,
    deleteByUserIdAndStrainId
}

function getById(id) {
    return db("user-strains")
        .where({ id })
}

function getStrainByUserId(userID) {
    return db("user-strains")
        // .groupBy("user_id")
        .select("strain_id")
        .where("user_id", "=", userID)
}

function add(newUserStrain) {
    return db("user-strains")
        .insert(newUserStrain)
        .then((ids) => {
            const [id] = ids
            return getById(id);
        })
}

function deleteByUserIdAndStrainId(userID, strainID) {
    return db("user-strains")
        .delete()
        .where("user_id", "=", userID)
        .and("strain_id", "=", strainID)
}