import dbRouter from './dbRouter';
import express from 'express';
const router = express.Router();
router.use('/dbRouter', dbRouter);
export default router;
