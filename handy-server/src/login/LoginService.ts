import CommonService from "./../common/CommonService";

const userModel = require("./../user/UserModel");

class LoginService extends CommonService {


    // 로그인
    login(param, callback) {
        this.comList(userModel, param, callback);
    }

    // 로그아웃 (미사용)
    logOut(param, callback) {
        
    }

}

export const loginService = new LoginService();