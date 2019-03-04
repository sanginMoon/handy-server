import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new mongoose.Schema( {
    name : String,
    description : String,
    category: String,
    tag : String,
    doc_url : String,
    useYn : String,
    type : String,
    property : Schema.Types.Mixed,
    reg_date : {type : Date, default : Date.now}
}); 



module.exports = mongoose.model('Template_Component', schema);

