let mongoose = require('mongoose');

// Create a model class
let questionModel = mongoose.Schema(
    {
        comment: String,
        item: String,
        created: {
            type: Date,
            default: Date.now
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        inventory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Inventory"
        }
    },
    {
        collection: "question"
    }
);

module.exports = mongoose.model('Question', questionModel);