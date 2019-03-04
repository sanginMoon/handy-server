
/**
 * CommonService
 * 1. 데이터 결과 처리
 * 2. CRUD 기본처리
 */
 export default class CommonService {


    //=========================================
    // 1. 데이터 결과 처리
    //=========================================
    getSuccess(data) {
        let resultData = {
            result: {
                code: 0,
                message: "succss"
            },
            data : data
        };
        return resultData;
    }
    getError(data) {

        console.log("Data Error" + data);

        let resultData = {
            result: {
                code: -1,
                message: "error"
            },
            data : data
        };
        return resultData;
    }


    //=========================================
    //2. CRUD 기본처리
    //=========================================
    comList(model, query, callback) {
        
        model.find(query, (err, docs) => {
            if (err) {
                callback(this.getError(err));
            } else {
                callback(this.getSuccess(docs));
            }
        })
    }

    comDetail(model, query, callback) {

        model.find(query, (err, docs) => {
            if (err) {
                callback(this.getError(err));
            } else {
                callback(this.getSuccess(docs));
            }
        });
    }


    comInsert(model, param, callback) {

        let inData  = this._getDataMapping(model, param);

        model.insertMany([inData], (err, docs) => {
            if (err) {
                callback(this.getError(err));
            } else {
                callback(this.getSuccess(docs));
            }
        });
    }

    compInsertBulk(model, param, callback) {

        model.insertMany(param, (err, docs) => {
            if (err) {
                callback(this.getError(docs));
            } else {
                callback(this.getSuccess(docs));
            }
        });
    }

    comUpdate(model, query, param, callback) {

        let inData  = this._getDataMapping(model, param);

        model.update(query, {$set : inData}, (err, docs) => {
            if (err) {
                callback(this.getError(err));
            } else {
                callback(this.getSuccess(docs));
            }
        });
    }

    compUpdateBulk(model, query, param, callback) {

        let inData  = this._getDataMapping(model, param);

        model.update(query, {$set : inData}, {multi : true}, (err, docs) => {
            if (err) {
                callback(this.getError(err));
            } else {
                callback(this.getSuccess(docs));
            }
        });
    }

    comDelete(mode, query, callback) {

        mode.deleteOne(query, (err, docs) => {
            if (err) {
                callback(this.getError(err));
            } else {
                callback(this.getSuccess(docs));
            }
        });
    }

    comDeleteAll(mode, callback) {
        mode.deleteMany({}, (err, docs) => {
            if (err) {
                callback(this.getError(err));
            } else {
                callback(this.getSuccess(docs));
            }
        });
    }


    private _getDataMapping(model, param) {

        let inData  = {};

        for (let item in param) {
            if (model.schema.paths[item]) {
                inData[item] = param[item];
            }
        }

        return inData;
    }

    
}