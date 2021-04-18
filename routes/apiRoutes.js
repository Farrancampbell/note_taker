const fs = require("fs")
const { request } = require("http")
var path = require("path")

var router = require("express").Router()
router.get("/notes", (require, response)=>{
    fs.readFile(path.join(__dirname,"../db/db.json"),"utf8",(error,data)=>{
        response.json(JSON.parse(data))

    })
})

router.post("/notes", (require, response)=>{
    response.sendFile(path.join(__dirname,"../db/db.json"))
})

router.post("/notes"), (require, response) => {
    fs.writeFile("db/db.json", JSON.stringify(request.body), (err) => {
        if (err) throw err;
        response.json("success");
    });

router.delete("/notes/:id", (require, response) => {
    fs.readFile("../db/db.json", (err, data) => {
       const notesArray = JSON.parse(data);
       const idNumber = require.params.id;
       const filterArray = notesArray.filter(note => note.id !== idNumber);

       fs.writeFile("../db/db.json", JSON.stringify(filterArray), "utf8");
       response.sendStatus(200);

    }
}


module.exports = router;