import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.get('/:id', userController.getSingleUser);
router.get('/', userController.getAllUsers);

router.post(
  '/signup',
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser
);

router.patch(
  '/:id',
  validateRequest(UserValidation.createUserZodSchema),
  userController.updateUser
);
export const UserRoutes = router;
