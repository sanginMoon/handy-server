"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const schema = new mongoose_1.default.Schema({
    name: String,
    type: String,
    subType: String,
    description: String,
    useYn: Boolean,
    data: Schema.Types.Mixed,
    reg_date: { type: Date, default: Date.now }
});
module.exports = mongoose_1.default.model('Template_Component_Data', schema);
//# sourceMappingURL=DataModel.js.map