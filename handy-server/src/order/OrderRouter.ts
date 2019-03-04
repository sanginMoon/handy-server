import * as express from "express";
import { orderService } from './OrderService';


const router = express.Router();

router.get("/order/list", (req, res) => {
   res.send(orderService.list(req.body));
});

router.get("/order/detail", (req, res) => {
    res.send(orderService.detail(req.body));
});

router.post("/order/add", (req, res) => {
    res.send(orderService.insert(req.body));
});

router.post("/order/mod", (req, res) => {
    res.send(orderService.update(req.body));
});

router.delete("/order/del", (req, res) => {
    res.send(orderService.delete(req.body));
});


module.exports = router;
