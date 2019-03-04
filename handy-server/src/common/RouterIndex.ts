import * as loginRouter from "./../login/LoginRouter";
import * as userRouter from "./../user/UserRouter";
import * as productRouter from "./../product/ProductRouter";
import * as orderRouter from "./../order/OrderRouter";
import * as templateRouter from "./../template/TemplateRouter";


export namespace router {

    export let login        = loginRouter;
    export let user         = userRouter;
    export let product      = productRouter;
    export let order        = orderRouter;
    export let template     = templateRouter;
}