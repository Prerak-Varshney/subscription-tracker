import { Router } from 'express';
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: "Get all subscriptions"})
})

subscriptionRouter.get('/:id', authorize, getUserSubscriptions);
subscriptionRouter.post('/', authorize, createSubscription);

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
