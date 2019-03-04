"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = __importStar(require("./common/RouterIndex"));
const app = express();
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// Cross domain Setting.
app.use(cors());
// DB Connection
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log("Connection to mongod server !!!!");
});
mongoose.connect('mongodb://localhost/msimall');
// 라우터 설정
const routerIndex = router.router;
for (let item in routerIndex) {
    app.use('/', routerIndex[item].default);
}
// Default Message
app.get("/", (req, res) => {
    res.send("Welcome !!!! ");
});
// Listen 설정 
app.listen(3000, () => {
    console.log("Server Start[3000] !!!!");
});
//# sourceMappingURL=app.js.map