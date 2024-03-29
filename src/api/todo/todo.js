const restfull = require('node-restful')
const mongoose = restfull.mongoose

const todoSchema = mongoose.Schema({
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: {type: Date, default: Date.now}
})

module.exports = restfull.model('Todo', todoSchema)