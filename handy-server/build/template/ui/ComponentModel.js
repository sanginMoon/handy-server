"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const schema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    category: String,
    tag: String,
    doc_url: String,
    useYn: String,
    type: String,
    property: Schema.Types.Mixed,
    reg_date: { type: Date, default: Date.now }
});
module.exports = mongoose_1.default.model('Template_Component', schema);
//# sourceMappingURL=ComponentModel.js.map