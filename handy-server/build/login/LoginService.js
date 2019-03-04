"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommonService_1 = __importDefault(require("./../common/CommonService"));
const userModel = require("./../user/UserModel");
class LoginService extends CommonService_1.default {
    // 로그인
    login(param, callback) {
        this.comList(userModel, param, callback);
    }
    // 로그아웃 (미사용)
    logOut(param, callback) {
    }
}
exports.loginService = new LoginService();
//# sourceMappingURL=LoginService.js.map