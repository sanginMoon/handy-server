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
const OrderService_1 = require("./OrderService");
const router = express.Router();
router.get("/order/list", (req, res) => {
    res.send(OrderService_1.orderService.list(req.body));
});
router.get("/order/detail", (req, res) => {
    res.send(OrderService_1.orderService.detail(req.body));
});
router.post("/order/add", (req, res) => {
    res.send(OrderService_1.orderService.insert(req.body));
});
router.post("/order/mod", (req, res) => {
    res.send(OrderService_1.orderService.update(req.body));
});
router.delete("/order/del", (req, res) => {
    res.send(OrderService_1.orderService.delete(req.body));
});
module.exports = router;
//# sourceMappingURL=OrderRouter.js.map