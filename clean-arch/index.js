const express = require('express')
const createUser = require('./use-cases/createUser.js')


const port = 8080
const app = express()

app.use(express.json());

app.post('/user', (req,res)=> {
    const {username, password} = req.body

    try {
    const user = createUser({username, password})
    res.json({
        data: {
            ...user
        }
    })
    } catch ({message}) {
    res.status(400).json({
        data: {
            message
        }
    })
    }
})

app.listen(port, ()=> {
    console.log(`Server started in ${port} port`)
})