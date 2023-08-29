import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserFacultyController } from './userFaculty.controller';
import { UserFacultyValidation } from './userFaculty.validation';

const router = express.Router();
router.get('/', UserFacultyController.getAllUserFacultiesFromDB);
router.get('/:id', UserFacultyController.getSingleUserFacultyFromDB);

router.patch(
  '/:id',
  validateRequest(UserFacultyValidation.updateUserFacultyZodSchema),
  UserFacultyController.updateUserFacultyToDB,
);

router.delete('/:id', UserFacultyController.deleteUserFacultyFromDB);
router.get('/', UserFacultyController.getAllUserFacultiesFromDB);

export const FacultyRoutes = router;
