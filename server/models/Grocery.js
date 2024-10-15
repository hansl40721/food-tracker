const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

const grocerySchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    count: {
        type: Number,
        default: 5
    },
    expiration: {
        type: Date,
        get: function (date) {
            return dayjs(date).format("MM/DD/YYYY")
        },
    },
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Grocery = model('Grocery', grocerySchema);

module.exports = Grocery;