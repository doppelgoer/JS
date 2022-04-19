import express from 'express';
// import getTodayUser from '../middleware/getData';
import { getTodayUser } from '../middleware/getData';
const dbRouter = express.Router();

dbRouter.get('/getTodayUser', getTodayUser);

export default dbRouter;
