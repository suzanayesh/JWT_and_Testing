"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePermission = void 0;
const validatePermission = (req, res, next) => {
    const { name } = req.body;
    const errorList = [];
    if (!name || typeof name !== 'string') {
        errorList.push('Permission name is required and must be a string.');
    }
    if (errorList.length > 0) {
        return res.status(400).json({ error: errorList });
    }
    next();
};
exports.validatePermission = validatePermission;
