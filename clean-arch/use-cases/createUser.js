const createMockUserConnector = require('../connectors/createMockUserConnector')
const User = require('../entities/user')

module.exports = async ({username, password}) => {
    const newUser = new User(username, password)
    newUser.validate()

    const userInDb = await createMockUserConnector(newUser)

    return userInDb
}