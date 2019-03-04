import CommonService from "./../../common/CommonService";
const componentModel = require('./ComponentModel');

class ComponentService extends CommonService {

    list(param, callback):any {
        this.comList(componentModel, {}, callback);
    }

    detail(param, callback):any {
        let query   = {id : param.id};
        this.comDetail(componentModel, query, callback);
    }

    insert(param, callback) {
        this.comInsert(componentModel, param, callback);
    }

    update(param, callback) {
        let query = { id : param.id};
        this.comUpdate(componentModel, query, param, callback);      
    }

    delete(param, callback) {
        this.comDelete(componentModel, param, callback);
    }

    insertBulk(param, callback):any {

        console.log("Bulk Insert ....");

        if (param.data && param.data.length > 0) {
            this.comDeleteAll(componentModel, (data) => {
                this.compInsertBulk(componentModel, param.data, callback);
            });
        } else {
            callback(this.getError({"description" : "No Insert Data"}));
        }
    }

    updateBulk(param, callback):any {

        console.log("Bulk Update ....");

        if (param.data && param.data.length > 0) {

            this.compUpdateBulk(componentModel, {}, {useYn : "N"}, () => {
                let iCnt    = 0;
                let results = [];
                for (let i = 0 ; i < param.data.length ; i++) {
                    let data    = param.data[i];

                    this.comUpdate(componentModel, { id : data.id}, { useYn : data.useYn}, (result) =>{
                        iCnt = iCnt + 1;
                        results.push(result)
                    });
                }

                setTimeout(() => {
                    if (iCnt == param.data.length) {
                        callback(results);
                    }
                }, 300);
            });
        } else {
            callback(this.getError({"description" : "No Insert Data"}));
        }
    }
}

export const componentService = new ComponentService();