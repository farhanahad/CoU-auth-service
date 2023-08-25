/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
//import globalErrorHandler from './app/middlewares/globalErrorHandler'

//import ApiError from './errors/ApiError'

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//APIError
// app.get('/', (req: Request, res: Response) => {
//   throw new ApiError(400, 'Custom error')
// })

// app.get('/', (_req: Request, _res: Response, next: NextFunction) => {
//   next('Custom error')
// })

// console.log(app.get('env'))
// console.log(process.env)
//Testing
// app.get('/', async (req: Request, res: Response) => {
//   await usersService.createUser({
//     id: '222',
//     password: '12343',
//     role: 'Student',
//   })
//   res.send('Working Successfully')
// })
//Application Routes

app.use('/api/v1/users/', UserRoutes);

// app.get('/', async (req: Request, res: Response) => {
//   res.send('Working Successfully')
// })

// //custom error
// app.get('/', (_req: Request, res: Response) => {
//   throw new ApiError(400, 'Custom error')
// })

//UnHandled Rejection
// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('Unhandled rejection'))
// })

//uncaught exception
// app.get('/', async (req: Request, res: Response) => {
//   console.log('x')
// })

//global error handler

app.use(globalErrorHandler);
export default app;
