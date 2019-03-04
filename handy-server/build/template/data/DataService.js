"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommonService_1 = __importDefault(require("./../../common/CommonService"));
const dataModel = require('./DataModel');
class DataService extends CommonService_1.default {
    list(param, callback) {
        this.comList(dataModel, param, callback);
    }
    detail(param, callback) {
        let query = { id: param.id };
        this.comDetail(dataModel, query, callback);
    }
    insert(param, callback) {
        this.comInsert(dataModel, param, callback);
    }
    update(param, callback) {
        let query = { _id: param._id };
        this.comUpdate(dataModel, query, param, callback);
    }
    delete(param, callback) {
        let query = { _id: param._id };
        this.comDelete(dataModel, query, callback);
    }
}
exports.dataService = new DataService();
//# sourceMappingURL=DataService.js.map