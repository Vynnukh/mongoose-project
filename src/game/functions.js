const Game = require("./model.js")

exports.createGame = async (gameObj) => {
    try {
        console.log(gameObj)
        const newGame = await Game.create(gameObj)
        console.log(newGame)
    } catch (error) {
        console.log(error)
    }
}