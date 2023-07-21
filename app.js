const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors')
require('express-async-errors');
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

const router = require('./routes/details')

app.use('/', router)

const port = process.env.PORT

const connectDB = require('./db/connect')

const start = async () => {

try {
    await connectDB(process.env.MONGO_URI)
    
    app.listen(port , () => {
        console.log(`Server is listening on port ${port}!`);
    })
} catch (error) {
    console.error(error)
}
}

start()