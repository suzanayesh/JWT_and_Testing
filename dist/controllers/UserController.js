"use strict";
// // controllers/UserController.ts
// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import { User } from '../entities/User';
// import { Role } from '../entities/Role';
// import { Permission } from '../entities/Permission';
Object.defineProperty(exports, "__esModule", { value: true });
// class UserController {
//   async createUser(req: Request, res: Response) {
//     try {
//       const userRepository = getRepository(User);
//       const newUser = userRepository.create(req.body);
//       await userRepository.save(newUser);
//       return res.status(201).json(newUser);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Failed to create user' });
//     }
//   }
//   async assignRoleToUser(req: Request, res: Response) {
//     try {
//       const { userId, roleId } = req.params;
//       // Fetch the user and role entities
//     const userId = req.params.userId;
//       const roleId = req.params.roleId;
//       const userRepository = getRepository(User);
//       const roleRepository = getRepository(Role);
//       // Check if the user already has the role (avoid duplication)
//       const userHasRole = user.roles.some((r) => r.id === role.id);
//       if (userHasRole) {
//         return res.status(400).json({ error: 'User already has this role' });
//       }
//       // Assign the role to the user
//       user.roles.push(role);
//       await userRepository.save(user);
//       return res.status(200).json({ message: 'Role assigned to the user successfully' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Failed to assign role to user' });
//     }
//   }
//   async getUserWithRolesAndPermissions(req: Request, res: Response) {
//     try {
//       const { userId } = req.params;
//       // Fetch the user entity along with its roles and associated permissions
//       const userRepository = getRepository(User);
//       const user = await userRepository.findOneOrFail(userId, { relations: ['roles', 'roles.permissions'] });
//       // Extract roles and permissions for the response
//       const roles = user.roles.map((role) => {
//         return {
//           id: role.id,
//           name: role.name,
//           permissions: role.permissions.map((permission) => {
//             return {
//               id: permission.id,
//               name: permission.name,
//             };
//           }),
//         };
//       });
//       // Return the user with roles and permissions
//       return res.status(200).json({
//         id: user.id,
//         username: user.username,
//         email: user.email,
//         roles,
//       });
//     } catch (error) {
//       console.error(error);
//       return res.status(404).json({ error: 'User not found' });
//     }
//   }
//   async createRole(req: Request, res: Response) {
//     try {
//       const roleRepository = getRepository(Role);
//       const newRole = roleRepository.create(req.body);
//       await roleRepository.save(newRole);
//       return res.status(201).json(newRole);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Failed to create role' });
//     }
//   }
//   async createPermission(req: Request, res: Response) {
//     try {
//       const permissionRepository = getRepository(Permission);
//       const newPermission = permissionRepository.create(req.body);
//       await permissionRepository.save(newPermission);
//       return res.status(201).json(newPermission);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Failed to create permission' });
//     }
//   }
// }
// export default new UserController();
