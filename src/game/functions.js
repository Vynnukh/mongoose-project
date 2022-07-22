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

exports.readGames = async () => {
    try {
        return await Game.find({})
    } catch (error) {
        console.log(error)
    }
}

exports.updateSingle = async (filterTitle, newInformation) => {
    try {
        return Game.findOneAndUpdate(filterTitle, newInformation)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteSingle = async (titleToDelete) => {
    try {
        return Game.findOneAndDelete(titleToDelete)
    } catch(error) {
        console.log(error)
    }
}

exports.filterGenre = async (filter) => {
    try {
        return Game.find(filter)
    } catch(error) {
        console.log(error)
    }
}