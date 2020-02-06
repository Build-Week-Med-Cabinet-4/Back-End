const router = require('express').Router();

const verify = require("../auth/authenticate-middleware");

const Responses = require("./responses-model");

const axios = require("axios")
// /api/responses

router.get("/:id", verify, (request, response) => {
    axios.get(`https://med-cabinet-4-api.herokuapp.com/search/${request.params.id}`)
        .then((dataResponse) => {
            response.status(200).json({ ...dataResponse.data })
        })
        .catch((error) => {
            response.status(500).json({ oops: error })
        })
})

router.get("/user/:id", verify, (request, response) => {
    Responses.getStrainByUserId(request.params.id)
        .then((strainIds) => {
            // console.log(stuff);
            response.status(200).json(Object.values(strainIds))
        })
        .catch((error) => {
            response.status(500).json({ oops: error })
        })
})

router.post("/", verify, (request, response) => {
    Responses.add(request.body)
        .then((newUserStrain) => {
            response.status(200).json({ ...newUserStrain })
        })
        .catch((error) => {
            response.status(500).json({ oops: error })
        })
})

router.post('/search', verify, (request, response) => {
    axios.post("https://med-cabinet-4-api.herokuapp.com/predict",
        {
            ...request.body
        }
    )
        .then((dataResponse) => {
            console.log(dataResponse.data);
            response.status(200).json({ ...dataResponse.data });
        })
        .catch((error) => {
            console.log(error)
        })
});

router.delete("/", verify, (request, response) => {
    Responses.deleteByUserIdAndStrainId(request.body.user_id, request.body.strain_id)
        .then((recordsDeleted) => {
            response.status(200).json({ deleted: recordsDeleted })
        })
        .catch((error) => {
            console.log(error)
            response.status(500).json({ message: "Internal server error. Please scream at your local back-end devs until this is fixed." })
        })
})

//Became obsolete after a short while
// router.put("/:id", verify, (request, response) => {
//     Responses.update(request.params.id, request.body)
//         .then((recordsUpdated) => {
//             response.status(200).json({ updated: recordsUpdated })
//         })
//         .catch((error) => {
//             console.log(error)
//             response.status(500).json({ message: "Internal server error. Please scream at your local back-end devs until this is fixed." })
//         })
// })

module.exports = router;
