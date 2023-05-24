const mysql = require('mysql');

module.exports = (user) => {
    let dbConnection = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
    });
    
    dbConnection.connect()    
    const dbResult = dbConnection.query(`
        INSERT INTO users (username, password)
        VALUES (${user.username}, ${user.password});
    `, (error)=> {
        if(error) throw error
    }) 
    dbConnection.end()

    return dbResult
}