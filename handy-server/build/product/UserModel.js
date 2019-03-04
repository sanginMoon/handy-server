const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id: String,
    pwd: String,
    name: String,
    email: String,
    reg_date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('user', schema);
//# sourceMappingURL=UserModel.js.map