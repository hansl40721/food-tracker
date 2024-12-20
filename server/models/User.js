const { Schema, model } = require('mongoose');
const bcrypt = require ('bcrypt');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String, 
        required: true,
        trim: true
    },
    groceries: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Grocery'
        },
    ],
    lists: [
        {
            type: Schema.Types.ObjectId,
            ref: 'List'
        }
    ]
});

userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;