import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new mongoose.Schema( {
    name : String,
    type : String,
    subType : String,
    description : String,
    useYn : Boolean,
    data : Schema.Types.Mixed,
    reg_date : {type : Date, default : Date.now}
}); 



module.exports = mongoose.model('Template_Component_Data', schema);

