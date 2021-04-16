var path = require("path")

var router = require("express").Router()
router.get("/notes", (require, response)=>{
    response.sendFile(path.join(__dirname,"../public/notes.html"))
})

router.get("*", (require, response)=>{
    response.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports = router;