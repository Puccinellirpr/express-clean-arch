module.exports = class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validate() {
        if(this.password.length < 6) {
            throw new Error ('Invalid passwordl')
        }
    }
}