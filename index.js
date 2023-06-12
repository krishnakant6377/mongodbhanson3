const express = require('express');

const app = express();

const route = require("./routes/route")
const connect = require("./database/db")

app.use(express.json())

app.use(route)

app.get("/", (req, res) => {
    console.log("Handson 3 MONGOOSE")
})

app.listen(4000, async () => {
    try {
        await connect()
        console.log("Server is running at port 4000")
    }
    catch (err) {
        console.log(`Error in the server ${err}`)
    }
})