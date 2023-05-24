const express = require('express')
const mysql = require('mysql');
const app = express()
const User = require('./entities/user')

const port = 8080

app.post('/user', (req,res)=> {
    const {username, password} = req.body

    const user = new User(username, password)

    user.validate()

    let dbConnection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
    });

    dbConnection.query(`
        INSERT INTO users (username, password)
        VALUES (${user.username}, ${user.password});
    `)

    res.json({
        data: {
            id: 1,
            ...user
        }
    })
})

app.listen(port, ()=> {
    console.log(`Server started in ${port} port`)
})