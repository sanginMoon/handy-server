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
const UserService_1 = require("./UserService");
const router = express.Router();
router.get("/user/list", (req, res) => {
    UserService_1.userService.list(req.body, (data) => {
        res.json(data);
    });
});
router.get("/user/detail", (req, res) => {
    UserService_1.userService.detail(req.body, (data) => {
        res.json(data);
    });
});
router.post("/user/add", (req, res) => {
    UserService_1.userService.insert(req.body, (data) => {
        res.json(data);
    });
});
router.post("/user/mod", (req, res) => {
    UserService_1.userService.update(req.body, (data) => {
        res.json(data);
    });
});
router.delete("/user/del", (req, res) => {
    UserService_1.userService.delete(req.body, (data) => {
        res.json(data);
    });
});
module.exports = router;
//# sourceMappingURL=UserRouter.js.map