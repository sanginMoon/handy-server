import * as express from "express";
import { productService } from './ProductService';


const router = express.Router();

router.get("/product/list", (req, res) => {
   res.send(productService.list(req.body));
});

router.get("/product/detail", (req, res) => {
    res.send(productService.detail(req.body));
});


router.post("/product/add", (req, res) => {
    res.send(productService.insert(req.body));
});


router.post("/product/mod", (req, res) => {
    res.send(productService.update(req.body));
});

router.delete("/product/del", (req, res) => {
    res.send(productService.delete(req.body));
});


module.exports = router;
