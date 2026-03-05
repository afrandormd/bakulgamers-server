const mongoose = require('mongoose')

let playerSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email harus diisi"]
    },
    name: {
        type: String,
        required: [true, "nama harus diisi"],
        maxlength: [225, "Panjang nama harus antara 3 - 225 karakter"],
        minlength: [3, "Panjang nama harus antara 3 - 225 karakter"],
    },
    username: {
        type: String,
        required: [true, "username harus diisi"],
        maxlength: [225, "Panjang username harus antara 3 - 225 karakter"],
        minlength: [3, "Panjang username harus antara 3 - 225 karakter"],
    },
    password: {
        type: String,
        required: [true, "kata sandi harus diisi"],
        maxlength: [225, "Panjang password maksimal 225 karakter"],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    avatar: { type: String },
    filename: { type: String },
    phoneNumber: {
        type: String,
        required: [true, "nomor telepon harus diisi"],
        maxlength: [13, "Panjang nomor telepon harus antara 9 - 13 karakter"],
        minlength: [9, "Panjang nomor telepon harus antara 9 - 13 karakter"],
    },
    favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
}, { timestamps: true })

module.exports = mongoose.model('Player', playerSchema)
