"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const ProductService_1 = require("./ProductService");
const router = express.Router();
router.get("/product/list", (req, res) => {
    res.send(ProductService_1.productService.list(req.body));
});
router.get("/product/detail", (req, res) => {
    res.send(ProductService_1.productService.detail(req.body));
});
router.post("/product/add", (req, res) => {
    res.send(ProductService_1.productService.insert(req.body));
});
router.post("/product/mod", (req, res) => {
    res.send(ProductService_1.productService.update(req.body));
});
router.delete("/product/del", (req, res) => {
    res.send(ProductService_1.productService.delete(req.body));
});
module.exports = router;
//# sourceMappingURL=ProductRouter.js.map