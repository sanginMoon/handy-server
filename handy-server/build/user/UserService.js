"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommonService_1 = __importDefault(require("./../common/CommonService"));
const userModel = require('./userModel');
class UserService extends CommonService_1.default {
    list(param, callback) {
        this.comList(userModel, {}, callback);
    }
    detail(param, callback) {
        let query = { id: param.id };
        this.comDetail(userModel, query, callback);
    }
    insert(param, callback) {
        this.comInsert(userModel, param, callback);
    }
    update(param, callback) {
        let query = { id: param.id };
        this.comUpdate(userModel, query, param, callback);
    }
    delete(param, callback) {
        let query = { id: param.id };
        this.comDelete(userModel, query, callback);
    }
}
exports.userService = new UserService();
//# sourceMappingURL=UserService.js.map