const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for encoded bodies

const port = 3001

const todosRoutes = require('./routes/Todos')
// const TodoRouters = require('./route')
app.use('/todos', todosRoutes)

app.listen(port, () => {
    console.log("Listening on port: ", port) 

})