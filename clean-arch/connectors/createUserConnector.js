const mysql = require('mysql');

module.exports = async (user) => {
    let dbConnection = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
    });
    
    dbConnection.connect()    
    const dbResult = await dbConnection.query(`
        INSERT INTO users (username, password)
        VALUES (${user.username}, ${user.password});
    `, (error)=> {
        if(error) throw error
    }) 
    dbConnection.end()

    return dbResult
}