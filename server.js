const express = require("express")

const app = express()

let artists = [
  {
    id: 1,
    name: "Metallica"
  },
  {
    id: 2,
    name: "Iron Maideb"
  },
  {
    id: 3,
    name: "Deep Purple"
  }
];


app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Api")
})

app.get("/artists", (req, res) => {
  res.send(artists)
})

app.get("/artists/:id", (req, res) => {
  const artist = artists.find(artist => artist.id === Number(req.params.id))
  res.send(artist)
})

app.post("/artists", (req, res) => {
  const artist = {
    id: Date.now(),
    name: req.body.name
  }
  artists.push(artist)
  res.send(artist)
})

app.put("/artists/:id", (req, res) => {
  const artist = artists.find(artist => artist.id === Number(req.params.id))
  artist.name = req.body.name
  res.sendStatus(200)
})

app.delete("/artists/:id", (req, res) => {
  artists = artists.filter(artist => artist.id !== Number(req.params.id))
  res.sendStatus(200)
})


app.listen(3012, () => console.log("server started on port 3012"))