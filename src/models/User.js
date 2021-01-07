const {Schema, model} = require('mongoose');
const bcypt = require('bcryptjs');

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
   
}, {
    timestamps:true
});

UserSchema.method.encryptPassword = async password =>{
    const salt = await bcypt.genSalt(10);
    return await bcypt.hash(password, salt);
}

UserSchema.method.matchPassWord = async function (password){
    return await bcypt.compare(password, this.password);
}

module.exports = model('User', UserSchema);