"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const User_1 = require("../entities/User");
const validateUser = (req, res, next) => {
    const { username, password, email, roles } = req.body;
    const errorList = [];
    if (!username || typeof username !== 'string') {
        errorList.push('Username is required and must be a string.');
    }
    if (!password || typeof password !== 'string') {
        errorList.push('Password is required and must be a string.');
    }
    if (!email || !(0, User_1.isEmail)(email)) {
        errorList.push('Email is required and must be a valid email address.');
    }
    if (!Array.isArray(roles) || roles.length === 0) {
        errorList.push('At least one role is required for the user.');
    }
    if (errorList.length > 0) {
        return res.status(400).json({ error: errorList });
    }
    // You can also validate roles further if needed
    next();
};
exports.validateUser = validateUser;
