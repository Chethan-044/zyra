const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  email:String,
  password:{
    type:String,
  },
  picture:String,
  cart:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product",
}],
  orders:{
    type:Array,
    default:[],
},
  contact:Number,

});

module.exports = mongoose.model('users', userSchema);