const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    taste: {
        type: String,
        enum : ['spicy','sauce','sweet']
    },
    is_drink : {
        type : Boolean,
        default: false
    },
    ingredients : {
        type : [String],
        default : []
    },
    num_sales : {
        type : Number
    }

})

const Menu = mongoose.model('menu',menuSchema)
module.exports = Menu