"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Permission_1 = require("../entities/Permission");
class PermissionController {
    async createPermission(req, res) {
        try {
            const permissionRepository = (0, typeorm_1.getRepository)(Permission_1.Permission);
            const newPermission = permissionRepository.create(req.body);
            await permissionRepository.save(newPermission);
            return res.status(201).json(newPermission);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create permission' });
        }
    }
}
exports.default = new PermissionController();
