const createMockUserConnector = require('../connectors/createMockUserConnector')
const User = require('../entities/user')

module.exports = ({username, password}) => {
    const newUser = new User(username, password)
    newUser.validate()

    const userInDb = createMockUserConnector(newUser)

    return userInDb
}