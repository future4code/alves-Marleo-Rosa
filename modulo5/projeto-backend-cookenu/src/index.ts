import app from "./app"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"

// Aqui vão os endpoints que criamos

app.post('/user/signup', signup)
app.get('/user/login', login)

// app.post("/user/login",user.login)
// app.put('/user/edit', user.editUser)