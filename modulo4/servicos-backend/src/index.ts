import app from "./app"
import createUser from './endpoints/createAddress'

app.post('/users/signup', createUser)
