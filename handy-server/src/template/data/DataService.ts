import CommonService from "./../../common/CommonService";
const dataModel = require('./DataModel');

class DataService extends CommonService {

    list(param, callback):any {
        this.comList(dataModel, param, callback);
    }

    detail(param, callback):any {
        let query   = {id : param.id};
        this.comDetail(dataModel, query, callback);
    }

    insert(param, callback) {
        this.comInsert(dataModel, param, callback);
    }

    update(param, callback) {
        let query = { _id : param._id};
        this.comUpdate(dataModel, query, param, callback);      
    }

    delete(param, callback) {
        let query = { _id : param._id};
        this.comDelete(dataModel, query, callback);
    }
}

export const dataService = new DataService();