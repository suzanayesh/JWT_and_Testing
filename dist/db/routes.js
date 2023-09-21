"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const PermissionController_1 = __importDefault(require("./controllers/PermissionController"));
const RoleController_1 = __importDefault(require("./controllers/RoleController"));
const router = (0, express_1.Router)();
// Create User
router.post('/api/users', UserController_1.default.createUser);
// Create Permission
router.post('/api/permissions', PermissionController_1.default.createPermission);
// Create Role (Set permissions of the role while creating the role)
router.post('/api/roles', RoleController_1.default.createRole);
// Assign Role to User
router.post('/api/users/:userId/roles/:roleId', UserController_1.default.assignRoleToUser);
// Get User (with his roles and permissions)
router.get('/api/users/:userId', UserController_1.default.getUserWithRolesAndPermissions);
exports.default = router;
