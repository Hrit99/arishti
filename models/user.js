const mongoose = require('mongoose')
const schema = mongoose.Schema 

const userSchema = new schema({
    name: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    contact: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
}, {timestamps:true})

const user = mongoose.model('user', userSchema)
module.exports = user