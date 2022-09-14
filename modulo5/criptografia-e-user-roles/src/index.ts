import app from "./app"
import createUser from "./endpoints/createUser"
// import createUser from "./endpoints/createUser"

// const user = new createUser()

app.post('/user/signup', createUser)

// app.post("/user/login",user.login)
// app.put('/user/edit', user.editUser)
// app.get('/user/all', user.getUsers)





