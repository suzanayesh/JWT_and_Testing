"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRole = void 0;
const validateRole = (req, res, next) => {
    const { name, permissions } = req.body;
    const errorList = [];
    if (!name || typeof name !== 'string') {
        errorList.push('Role name is required and must be a string.');
    }
    if (!Array.isArray(permissions) || permissions.length === 0) {
        errorList.push('At least one permission is required for the role.');
    }
    if (errorList.length > 0) {
        return res.status(400).json({ error: errorList });
    }
    // You can also validate permissions further if needed
    next();
};
exports.validateRole = validateRole;
