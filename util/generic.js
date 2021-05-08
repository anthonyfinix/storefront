const mongoose = require('mongoose');
module.exports = {
    active: { type: Boolean, required: true },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    created_at: { type: Number, require: true, default: Date.now() }
}