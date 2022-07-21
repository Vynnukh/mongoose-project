require("./db/connection.js")
const yargs = require("yargs")
const mongoose = require("mongoose")
const {createGame} = require("./game/functions")
const { collection } = require("./game/model")

const app = async (yargsObj) => {
    if (yargsObj.create) {
        await createGame({title: yargsObj.title, genre: yargsObj.genre})
        console.log("A new entry has been added")
        // This will handle adding new games to the database through the terminal
    } else if (yardgsObj.read) {
        const results = await collection.find().toArray()
        console.table(results)
        // This will handle listing the games that are within the databse in the format of a table
    } else if (yargs.update) {

        // This will handle updating a specific entry from the database
    } else if (yargs.delete) {

        // This will handle deleting a specific entry from the database
    } else {
        console.log("Invalid Input")
    }
    await mongoose.disconnect()
}

app(yargs.argv)