import { Router } from 'express'
import { ShowBusiness } from '../business/ShowBusiness'
import { ShowController } from '../controller/ShowController'
import { ShowDatabase } from '../database/migrations/ShowDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
export const showRouter = Router()
const showController = new ShowController(
    new ShowBusiness(
        new ShowDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)
showRouter.post("/create", showController.createShow)
showRouter.post("/ticket", showController.addTickets)

showRouter.get("/", showController.getShows)

showRouter.post("/:id", showController.addTickets)

showRouter.delete("/:id", showController.removeTickets)

// showRouter.delete("/:id", showController.deleteShow)