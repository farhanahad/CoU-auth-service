"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const userFaculty_controller_1 = require("./userFaculty.controller");
const userFaculty_validation_1 = require("./userFaculty.validation");
const router = express_1.default.Router();
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.FACULTY), userFaculty_controller_1.UserFacultyController.getSingleUserFacultyFromDB);
router.get('/', userFaculty_controller_1.UserFacultyController.getAllUserFacultiesFromDB);
router.patch('/:id', (0, validateRequest_1.default)(userFaculty_validation_1.UserFacultyValidation.updateUserFacultyZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), userFaculty_controller_1.UserFacultyController.updateUserFacultyToDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), userFaculty_controller_1.UserFacultyController.deleteUserFacultyFromDB);
exports.FacultyRoutes = router;
