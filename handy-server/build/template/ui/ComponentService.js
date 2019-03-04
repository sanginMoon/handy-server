"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommonService_1 = __importDefault(require("./../../common/CommonService"));
const componentModel = require('./ComponentModel');
class ComponentService extends CommonService_1.default {
    list(param, callback) {
        this.comList(componentModel, {}, callback);
    }
    detail(param, callback) {
        let query = { id: param.id };
        this.comDetail(componentModel, query, callback);
    }
    insert(param, callback) {
        this.comInsert(componentModel, param, callback);
    }
    update(param, callback) {
        let query = { id: param.id };
        this.comUpdate(componentModel, query, param, callback);
    }
    delete(param, callback) {
        this.comDelete(componentModel, param, callback);
    }
    insertBulk(param, callback) {
        console.log("Bulk Insert ....");
        if (param.data && param.data.length > 0) {
            this.comDeleteAll(componentModel, (data) => {
                this.compInsertBulk(componentModel, param.data, callback);
            });
        }
        else {
            callback(this.getError({ "description": "No Insert Data" }));
        }
    }
    updateBulk(param, callback) {
        console.log("Bulk Update ....");
        if (param.data && param.data.length > 0) {
            this.compUpdateBulk(componentModel, {}, { useYn: "N" }, () => {
                let iCnt = 0;
                let results = [];
                for (let i = 0; i < param.data.length; i++) {
                    let data = param.data[i];
                    this.comUpdate(componentModel, { id: data.id }, { useYn: data.useYn }, (result) => {
                        iCnt = iCnt + 1;
                        results.push(result);
                    });
                }
                setTimeout(() => {
                    if (iCnt == param.data.length) {
                        callback(results);
                    }
                }, 300);
            });
        }
        else {
            callback(this.getError({ "description": "No Insert Data" }));
        }
    }
}
exports.componentService = new ComponentService();
//# sourceMappingURL=ComponentService.js.map