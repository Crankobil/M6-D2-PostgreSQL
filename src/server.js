import express from "express"
import createTables from "./utils/create-table.js";


const server = express()

const {PORT=5000} = process.env;

server.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`)
    await createTables();
})

server.on('error', () =>{
    console.log('Server is stopped', error)
})