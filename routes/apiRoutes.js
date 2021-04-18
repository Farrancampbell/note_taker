const { response } = require("express")
const fs = require("fs")
const { request } = require("http")
var path = require("path")

var router = require("express").Router()
router.get("/notes", (require, response)=>{
    fs.readFile(path.join(__dirname,"../db/db.json"),"utf8",(error,data)=>{
        response.json(JSON.parse(data))

    })
})

// router.post("/notes", (require, response)=>{
//     response.sendFile(path.join(__dirname,"../db/db.json"))
// })

router.post("/notes", (req, response) => {
    fs.readFile(path.join(__dirname,"../db/db.json"),"utf8",(error,data)=>{
       var notes = JSON.parse(data)
       console.log(req.body)
       console.log(notes)
       notes.push(req.body)
       console.log(notes)
        fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
            if (err) throw err;
            response.json("success");
        });

    })
})
router.delete("/notes/:id", (require, response) => {
    fs.readFile("../db/db.json", (err, data) => {
       const notesArray = JSON.parse(data);
       const idNumber = require.params.id;
       const filterArray = notesArray.filter(note => note.id !== idNumber);

       fs.writeFile("../db/db.json", JSON.stringify(filterArray), "utf8");
       response.sendStatus(200);
    
    })
})

router.post("/notes", (require, response) => {
    const newNote = (request.body);
    newNote.id = uniqid();
    fs.writeFile("../db/db.json", JSON.stringify(req.body), (err) => {
        if (err) throw err;
        response.json("Success");
    });
})

module.exports = router;