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


app.listen(3012, () => console.log("server started on port 3012"))