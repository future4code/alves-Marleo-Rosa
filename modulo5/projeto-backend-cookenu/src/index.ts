import app from "./app"
import { signup } from "./endpoints/signup"

// Aqui vão os endpoints que criamos

app.post('/user/signup', signup)
// app.post("/user/login",user.login)
// app.put('/user/edit', user.editUser)