import app from "./app"
import { createRecipes } from "./endpoints/createRecipes"
import { getRecipesById } from "./endpoints/getRecipesById"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"
import { userProfile } from "./endpoints/userProfile"

// Aqui vão os endpoints que criamos

app.post('/user/signup', signup)
app.get('/user/login', login)
app.get('/user/profile', userProfile)

app.post('/recipes/create', createRecipes)
app.get('/recipes/:id', getRecipesById)

// app.post("/user/login",user.login)
// app.put('/user/edit', user.editUser)