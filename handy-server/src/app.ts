const express   = require('express');
const cors      = require('cors'); 
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');

import * as router from "./common/RouterIndex";

const app = express();


app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));


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
})