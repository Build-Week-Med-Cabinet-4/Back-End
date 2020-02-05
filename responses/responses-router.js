const router = require('express').Router();

const verify = require("../auth/authenticate-middleware");

const Responses = require("./responses-model")
// /api/responses
router.get("/", verify, (request, response) => {
    Responses.get()
        .then((allResponses) => {
            response.status(200).json(
                Object.values(allResponses)
            )
        })
})

router.post('/', verify, (request, response) => {
    Responses.add(request.body)
        .then((newResponse) => {
            response.status(200).json({ ...newResponse })
        })
        .catch((error) => {
            console.log(error)
            response.status(500).json({ message: "Internal server error. Please scream at your local back-end devs until this is fixed." })
        })
});

router.put("/:id", verify, (request, response) => {
    Responses.update(request.params.id, request.body)
        .then((recordsUpdated) => {
            response.status(200).json({ updated: recordsUpdated })
        })
        .catch((error) => {
            console.log(error)
            response.status(500).json({ message: "Internal server error. Please scream at your local back-end devs until this is fixed." })
        })
})

router.delete("/:id", verify, (request, response) => {
    Responses.remove(request.params.id)
        .then((recordsDeleted) => {
            response.status(200).json({ deleted: recordsDeleted })
        })
        .catch((error) => {
            console.log(error)
            response.status(500).json({ message: "Internal server error. Please scream at your local back-end devs until this is fixed." })
        })
})

module.exports = router;
