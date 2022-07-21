const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    genre: {
        type: String,
        default: "Not specified"
    }
})

const Game = mongoose.model("Game", gameSchema)

module.exports = Game