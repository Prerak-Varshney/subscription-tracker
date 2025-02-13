import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: "Get all subscriptions"})
})
subscriptionRouter.get('/:id', (req, res) => {
    res.send({title: "Get particular subscription"})
})
subscriptionRouter.post('/', (req, res) => {
    res.send({title: "Create new subscription"})
})
subscriptionRouter.put('/:id', (req, res) => {
    res.send({title: "Update subscription"})
})
subscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: "Delete subscription"})
})

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({title: "Get all subscriptions of a user"})
})
subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: "Update subscription"})
})
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title: "Get upcoming renewals"})
})

export default subscriptionRouter;
