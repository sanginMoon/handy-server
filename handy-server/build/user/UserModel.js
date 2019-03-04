"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: String,
    pwd: String,
    name: String,
    email: String,
    reg_date: { type: Date, default: Date.now }
});
module.exports = mongoose_1.default.model('User', schema);
//# sourceMappingURL=UserModel.js.map