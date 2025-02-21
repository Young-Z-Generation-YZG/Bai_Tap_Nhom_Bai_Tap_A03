const { OK, CREATED } = require("../core/success.response");
const {
    getProfile
} = require("../services/user.service");

class UserController {
    async getProfile(req, res) {
        new OK({
            message: "OK",
            statusCode: 200,
            data: getProfile(req),
        }).send(res);
    }
}

module.exports = new UserController();