import  mongoose from 'mongoose';

const schema = new mongoose.Schema( {
    id : String,
    title : String,
    author : String,
    price : String,
    small_image : String,
    medium_image : String,
    large_image : String,
    reg_date : {type : Date, default : Date.now}
});

module.exports = mongoose.model('Product', schema);

