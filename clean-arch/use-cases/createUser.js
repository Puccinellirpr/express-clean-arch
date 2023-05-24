module.exports = async ({username, password}) => {
    const newUser = new User(username, password)

    newUser.validate()

    let dbConnection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
    });

    dbConnection.query(`
        INSERT INTO users (username, password)
        VALUES (${user.username}, ${user.password});
    `)

    return {
        id: 1,
        ...newUser
    }
}