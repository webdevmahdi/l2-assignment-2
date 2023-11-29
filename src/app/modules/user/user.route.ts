import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// User Routes

// 1. Create a new user
router.post('/users', UserControllers.userCreationController);

// 2. Retrieve a list of all users
router.get('/users', UserControllers.getAllUserController);

// 3. Retrieve a specific user by ID
router.get('/users/:userId', UserControllers.getSingleUserByIdController);

// 4. Update user information
router.put('/users/:userId', UserControllers.updateSingleUserController);

// 5. Delete a user
router.delete('/users/:userId', UserControllers.userDeleteController);


export const UserRouter = router;
