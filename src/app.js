require("./db/connection.js")
const yargs = require("yargs")
const mongoose = require("mongoose")
const {createGame, readGames, updateSingle, deleteSingle, filterGenre} = require("./game/functions.js")

const app = async (yargsObj) => {
    if (yargsObj.create) {
        await createGame({title: yargsObj.title, genre: yargsObj.genre})
        console.log("A new entry has been added")
        // This will handle adding new games to the database through the terminal
    } else if (yargsObj.read) {
        console.log(await readGames())
        // This will handle listing the games that are within the databse in the format of a table
    } else if (yargsObj.update) {
        await updateSingle({title: yargsObj.update}, {newTitle: yargsObj.title, newGenre: yargsObj.genre})
        // This will handle updating a specific entry from the database
    } else if (yargsObj.delete) {
        await deleteSingle({title: yargsObj.delete})
        // This will handle deleting a specific entry from the database
    } else if (yargsObj.filterGenre) {
        console.log(await filterGenre({genre: yargsObj.filterGenre}))
        // This should handle filtering items within the database by genre
    } else {
        console.log("Invalid Input")
    } 
    await mongoose.disconnect()
}

app(yargs.argv)