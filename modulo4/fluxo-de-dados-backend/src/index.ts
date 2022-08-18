import express, { Request, Response } from "express"
import cors from "cors"
import { users } from "./data"
import { produtos, Produto } from "./data"
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

// app.get('/test/hello', (req: Request, res: Response) => {
//   const name = req.query.name
//   const ocupacao = req.body.ocupacao

//   res.send(`Olá, ${ocupacao} ${name}!`)
// })

// app.get('/test/:number', (req: Request, res: Response) => {
//   res.send(
//     `Seu número da sorte é ${Number(req.params.number) + 3}!
//   `)
// })

app.get("/playlists", (req: Request, res: Response) => {
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

app.get("/playlists/search", (req: Request, res: Response) => {
  const queriedName = req.query.name

  if (!queriedName) {
    res.status(400).send("Faltou a query 'name'")
  }

  const searchResult = []

  for (let user of users) {
    for (let playlist of user.playlists) {
      if (playlist.name.includes(queriedName)) {
        searchResult.push({
          id: playlist.id,
          name: playlist.name
        })
      }
    }
  }

  res.send({
    result: {
      quantity: searchResult.length,
      list: searchResult
    }
  })
})

app.get("/tracks", (req: Request, res: Response) => {
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

app.post('/playlists', (req: Request, res: Response) => {
  const playlistName = req.body.name
  const userIdToAdd = req.headers.authorization

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userIdToAdd) {
      users[i].playlists.push({
        id: Date.now().toString(),
        name: playlistName,
        tracks: []
      })
    }
  }

  res.send({ users })
})

app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
  const playlistIdToAdd = req.params.playlistId
  const userIdToAdd = req.headers.authorization
  const { name, artist, url } = req.body

  // iterando users
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userIdToAdd) {
      // iterando playlists do user
      for (let j = 0; j < users[i].playlists.length; j++) {
        if (users[i].playlists[j].id === playlistIdToAdd) {
          users[i].playlists[j].tracks.push({
            id: Date.now().toString(),
            name,
            artist,
            url,
          })
        }
      }
    }
  }


  res.send({ users })
})

app.delete("/playlist", (req: Request, res: Response) => {
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

app.delete("/track", (req: Request, res: Response) => {
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

//- Exercício 1
// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método `**GET`** no path **`“/test”`** que retorna uma mensagem genérica avisando que a API está funcional.


app.get("/test", (request, response) => {
  response.send("A API está funcional.")
})

//- Exercício 2 
// Crie um arquivo chamado **`data.ts`** que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). Popule manualmente o array com pelo menos 3 produtos.

app.get("/produtos", (requst, response) => {

})

// - Exercício 3
// Desenvolva um endpoint que **cria um novo produto** e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

app.post("/produtos", (req, res) => {
  // const id = req.body.id
  const name = req.body.name
  const price = req.body.price
  const novoProduto: Produto = {
    id: Date.now(),
    name,
    price
  }

  produtos.push(novoProduto)

  res.send(produtos)
})

//- Exercício 4
// Crie um endpoint que **retorna todos os produtos**.
app.get("/todosProdutos", (requst, response) => {
  response.send(produtos)
})

// - Exercício 5 NÃO FUNCIONOU
//Crie um endpoint que **edita** **o preço de** **um determinado produto** e retorna a lista de produtos atualizada.
app.put("/editaProdutos/:id", (req, res) => {
  const id = req.params.id
  const { price } = req.body

  const produtoFiltrado = produtos.find((item) => {
    return item.id === id
  }) as Produto

  console.log(produtoFiltrado)

  produtoFiltrado.price = price

  res.status(200).send(produtoFiltrado)
})

// - Exercício 6 NÃO FUNCIONOU
//Construa um endpoint que **deleta um determinado produto** e retorna a lista de produtos atualizada.
app.delete("/deletaProdutos/:id", (req, res) => {
  const id = req.params.id
  const searchId = produtos.findIndex(parametro => parametro.id === id)
  try {
    // produtos[searchId] = !(req.params.id)
    res.status(404).send("Usuário não encontrado")
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
  res.end()
})