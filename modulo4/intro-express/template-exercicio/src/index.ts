import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.post('/', (req: Request, res: Response) => {
    res.send('Hello, world!')
})

type Users = {
    id: number,
    name: string,
    phone: number | string,
    email: string,
    website: string
}

const users: Users[] = [
    {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        email: "Sincere@april.biz",
        website: "hildegard.org"
    },
    {
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
    }
]

app.get("/users", (req, res) => {
    res.send(users)
})

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}
const posts: Posts[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
]

app.get("/posts", (req, res) => {
    res.send(posts)
})