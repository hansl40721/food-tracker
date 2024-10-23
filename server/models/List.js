const { Schema, model } = require('mongoose');

const listSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    groceries: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Grocery'
        },
    ],
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const List = model('List', listSchema);

module.exports = List;