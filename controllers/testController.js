const uuid = require('uuid')
const path = require('path');
// const {Device, DeviceInfo} = require('../models/models')
// const ApiError = require('../error/ApiError');

class testController {
    async test(req, res, next) {
        const userAgent = req.headers["user-agent"]
        let Sstatus

        if (userAgent == "python-requests/2.31.0"){
            Sstatus = "Access allowed"
        } else {
            Sstatus = "Access denied"
        }

        return res.json(Sstatus)
    }
}

module.exports = new testController()