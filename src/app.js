const express = require("express")
const app = express()

app.all("*", function(req, res, next){
  console.log("passamos pelo app, huehuehuehue!")
  next()
}) 

//rotas
const index = require("./routes/index")
const filmes = require("./routes/filmesRoute")

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/filmes", filmes)

module.exports = app
