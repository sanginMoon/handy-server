"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginRouter = __importStar(require("./../login/LoginRouter"));
const userRouter = __importStar(require("./../user/UserRouter"));
const productRouter = __importStar(require("./../product/ProductRouter"));
const orderRouter = __importStar(require("./../order/OrderRouter"));
const templateRouter = __importStar(require("./../template/TemplateRouter"));
var router;
(function (router) {
    router.login = loginRouter;
    router.user = userRouter;
    router.product = productRouter;
    router.order = orderRouter;
    router.template = templateRouter;
})(router = exports.router || (exports.router = {}));
//# sourceMappingURL=RouterIndex.js.map