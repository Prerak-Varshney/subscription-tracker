import { Router } from 'express';
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({title: "Get all users"})
})
userRouter.get('/:id', (req, res) => {
    res.send({title: "Get particular user"})
})
userRouter.post('/', (req, res) => {
    res.send({title: "Create new user"})
})
userRouter.put('/:id', (req, res) => {
    res.send({title: "Update user"})
})
userRouter.delete('/:id', (req, res) => {
    res.send({title: "Delete user"})
})


export default userRouter;