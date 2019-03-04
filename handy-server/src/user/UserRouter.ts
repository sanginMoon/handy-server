import * as express from "express";
import { userService } from './UserService';


const router = express.Router();

router.get("/user/list", (req, res) => {
    userService.list(req.body,(data) => {
        res.json(data);
    });
});

router.get("/user/detail", (req, res) => {
    userService.detail(req.body,(data) => {
        res.json(data);
    });
});


router.post("/user/add", (req, res) => {
    userService.insert(req.body,(data) => {
        res.json(data);
    });
});


router.post("/user/mod", (req, res) => {
    userService.update(req.body,(data) => {
        res.json(data);
    });
});

router.delete("/user/del", (req, res) => {
    userService.delete(req.body,(data) => {
        res.json(data);
    });
});


module.exports = router;
