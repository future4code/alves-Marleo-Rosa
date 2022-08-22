import express, { Request, Response } from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/playlists", (req, res) => {
  // tenho todos os usuários
  const currentUsers = users // array de objetos
  console.log(1, currentUsers);

  // Vou pegar as playlists de cada usuário
  const userPlaylists = currentUsers.map((user: any) => {
    return user.playlists
  }) // array de arrays
  console.log(2, userPlaylists)

  const result = userPlaylists.flat(1)

  res.status(200).send(result);
})


app.get("/tracks", (req, res) => {
  const playlistId = req.query.id

  if (!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

  const allPlaylists = users.map((user: any) => {
    return user.playlists
  }).flat(1)

  let tracks;

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
      tracks = playlist.tracks
    }
  })

  res.status(200).send(tracks)
})

app.delete("/playlist", (req, res) => {
  const id = req.query.id

  users.forEach((user: any) => {
    user.playlists = user.playlists.map((playlist: any) => {
      if (playlist.id === id) {
        return {}
      }
      return playlist
    });
  })

  res.status(200).send(users)
})

app.delete("/track", (req, res) => {
  const trackId = req.query.trackId
  const playlistId = req.query.playlistId

  const allPlaylists = users
    .map((user: any) => {
      return user.playlists;
    })
    .flat(1);
  for (let i = 0; i <= allPlaylists.lenght; i++) {
    allPlaylists[i]
  }

  for (let playlist of allPlaylists) {
    playlist
  }

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
      playlist.tracks = playlist.tracks.map((track: any) => {
        if (track.id === trackId) {
          return {};
        }
        return track;
      });
    }
  })

  res.status(200).send(allPlaylists)
})

//ex 1
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})

//ex2
type Afazeres = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

//ex3
let afazeres: Afazeres[] =
  [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true
    }
  ]

//ex4
app.get("/afazeres", (req, res) => {
  const result = afazeres.filter(tarefa => {
    if (tarefa.completed === true) {
      return tarefa
    } else {
      return false
    }
  })
  res.send(result)
})

//ex5
app.post("/afazeres", (req, res) => {
  const addAfazer: Afazeres = {
    userId: req.body.userId,
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed
  }
  afazeres.push(addAfazer)
  res.send({ "Afazer adicionado!": afazeres })
})

//ex6
// app.put("/modAfazeres/:id/:value", (req: Request, res: Response) => {
//   let idUser = Number(req.params.id)
//   let idAfazeres = Number(req.params.value)
//   let modifica = afazeres.find(item => item.userId === idUser && item.id === idAfazeres)
//   if (modifica) { }
//   { modifica?.completed = !modifica?.completed }
//   res.send({ "Modificado!": afazeres })
// })

//ex7
app.delete("/afazeres/:id/:afazeresid", (req: Request, res: Response) => {
  let idUser = Number(req.params.userId)
  let idAfazeres = Number(req.params.id)
  let searchId = afazeres.filter(item => item.userId !== idUser && item.id !== idAfazeres)
  afazeres = searchId
  res.end("Afazer apagado!")
})