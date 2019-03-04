import CommonService from "./../common/CommonService";
const userModel = require('./userModel');

class UserService extends CommonService {

    list(param, callback):any {
        this.comList(userModel, {}, callback);
    }

    detail(param, callback):any {
        let query   = {id : param.id};
        this.comDetail(userModel, query, callback);
    }

    insert(param, callback) {
        this.comInsert(userModel, param, callback);
    }

    update(param, callback) {
        let query = { id : param.id};
        this.comUpdate(userModel, query, param, callback);      
    }

    delete(param, callback) {
        let query = { id : param.id};
        this.comDelete(userModel, query, callback);
    }
}

export const userService = new UserService();