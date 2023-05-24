const express = require('express')
const mysql = require('mysql');
const app = express()
const User = require('./entities/user')
const createUser = require('./use-cases/createUser.js')

const port = 8080

app.post('/user', async (req,res)=> {
    const {username, password} = req.body

    try {
    const user = await createUser({username, password})
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