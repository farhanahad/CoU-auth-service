import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserFacultyController } from './userFaculty.controller';
import { UserFacultyValidation } from './userFaculty.validation';

const router = express.Router();

router.get(
  '/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
  ),
  UserFacultyController.getSingleUserFacultyFromDB,
);
router.get('/', UserFacultyController.getAllUserFacultiesFromDB);

router.patch(
  '/:id',
  validateRequest(UserFacultyValidation.updateUserFacultyZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserFacultyController.updateUserFacultyToDB,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  UserFacultyController.deleteUserFacultyFromDB,
);

export const FacultyRoutes = router;
