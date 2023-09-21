"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Role_1 = require("../entities/Role");
class RoleController {
    async createRole(req, res) {
        try {
            const roleRepository = (0, typeorm_1.getRepository)(Role_1.Role);
            const newRole = roleRepository.create(req.body);
            await roleRepository.save(newRole);
            return res.status(201).json(newRole);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create role' });
        }
    }
}
exports.default = new RoleController();
