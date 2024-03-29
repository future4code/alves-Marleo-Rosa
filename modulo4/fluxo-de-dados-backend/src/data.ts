export const users: any = [
  {
    id: "amanda-rangel-newton",
    playlists: [
      {
        id: "28e07ef5-4c6f-4478-9998-1fae4c6d4252",
        name: "rock",
        tracks: [
          {
            id: "8b4215f1-950b-4c06-bfd6-80c2f8d1bb09",
            name: "Under Pressure",
            artist: "Queen",
            url: "https://www.youtube.com/watch?v=a01QQZyl-_I",
          },
        ],
      },
    ],
  },
  {
    id: "bruno-movio-carver",
    playlists: [
      {
        id: "28e07ef5-4c6f-4478-9998-1fae4c6d4254",
        name: "pagode",
        tracks: [
          {
            id: "8b4215f1-950b-4c06-bfd6-80c2f8d1bb07",
            name: "Churrasquinho",
            artist: "Menos é Mais feat. Fundo de Quintal",
            url: "https://www.youtube.com/watch?v=a01QQZyl-_I",
          },
        ],
      },
    ],
  },
  {
    id: "yuzo-carver",
    playlists: [
      {
        id: "21323231",
        name: "hard rock",
        tracks: [],
      }
    ],
  },
];

//ex2
export type Produto = {
  id: number | string,
  name: string,
  price: number
}

export const produtos: Produto[] = [
  {
    id: 1,
    name: "delectus aut autem",
    price: 10
  },
  {
    id: 2,
    name: "quis ut nam facilis et officia qui",
    price: 15
  },
  {
    id: 3,
    name: "fugiat veniam minus",
    price: 20
  }
]