"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Role_1 = require("../entities/Role");
const Permission_1 = require("../entities/Permission");
class UserController {
    async createUser(req, res) {
        try {
            const userRepository = (0, typeorm_1.getRepository)(User_1.User);
            const newUser = userRepository.create(req.body);
            await userRepository.save(newUser);
            return res.status(201).json(newUser);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create user' });
        }
    }
    async assignRoleToUser(req, res) {
        try {
            // const { userId, roleId } = req.params;
            // Fetch the user and role entities
            const userId = req.params.userId;
            const roleId = req.params.roleId;
            const userRepository = (0, typeorm_1.getRepository)(User_1.User);
            const roleRepository = (0, typeorm_1.getRepository)(Role_1.Role);
            // Check if the user already has the role (avoid duplication)
            const userHasRole = User_1.User.roles.some((r) => r.id === role.id);
            if (userHasRole) {
                return res.status(400).json({ error: 'User already has this role' });
            }
            // Assign the role to the user
            user.roles.push(role);
            await userRepository.save(user);
            return res.status(200).json({ message: 'Role assigned to the user successfully' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to assign role to user' });
        }
    }
    async getUserWithRolesAndPermissions(req, res) {
        try {
            const { userId } = req.params;
            // Fetch the user entity along with its roles and associated permissions
            const userRepository = (0, typeorm_1.getRepository)(User_1.User);
            const user = await userRepository.findOneOrFail(userId, { relations: ['roles', 'roles.permissions'] });
            // Extract roles and permissions for the response
            const roles = user.roles.map((role) => {
                return {
                    id: role.id,
                    name: role.name,
                    permissions: role.permissions.map((permission) => {
                        return {
                            id: permission.id,
                            name: permission.name,
                        };
                    }),
                };
            });
            // Return the user with roles and permissions
            return res.status(200).json({
                id: user.id,
                username: user.username,
                email: user.email,
                roles,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(404).json({ error: 'User not found' });
        }
    }
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
exports.default = new UserController();
