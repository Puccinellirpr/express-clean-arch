const express = require('express')
const mysql = require('mysql');
const app = express()

const port = 8080

app.post('/user', (req,res)=> {
    const {username, password} = req.body

    let dbConnection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
    });

    dbConnection.query(`
        INSERT INTO users (username, password)
        VALUES (${username}, ${password});
    `)

    res.json({
        data: {
            id: 1,
            username,
            password
        }
    })
})

app.listen(port, ()=> {
    console.log(`Server started in ${port} port`)
})