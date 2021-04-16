const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))
app.use("/",htmlRoutes)

app.listen(PORT,() => console.log(`listening on port ${PORT}`))
