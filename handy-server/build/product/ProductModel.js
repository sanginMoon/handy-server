"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: String,
    title: String,
    author: String,
    price: String,
    small_image: String,
    medium_image: String,
    large_image: String,
    reg_date: { type: Date, default: Date.now }
});
module.exports = mongoose_1.default.model('Product', schema);
//# sourceMappingURL=ProductModel.js.map