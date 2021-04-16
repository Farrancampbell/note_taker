var path = require("path")

var router = require("express").Router()
router.get("/api/notes", (require, response)=>{
    response.sendFile(path.join(__dirname,"./db/db.json"))
})

router.get("*", (require, response)=>{
    response.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports = router;