import * as express from "express";
import { loginService } from './LoginService';


const router = express.Router();

// 로그인 서비스
router.post("/login", (req, res) => {

    /*
    let resultData  = loginService.login(req.body);
    res.send(resultData);
    */
});


router.post("/logout", (req, res) => {
    res.send("Log Out...");
});

module.exports = router;