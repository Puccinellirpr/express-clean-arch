module.exports = async (user) => {
    const dbResult = {
        id: 1,
        ...user
    }
    return dbResult
}