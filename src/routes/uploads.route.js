const express = require('express');
const uploadsController = require('../controllers/uploads.controller');
const authMiddleware = require('../middleware/auth.middleware');

const uploadsRouter = express.Router();

uploadsRouter.use(authMiddleware);

uploadsRouter.post('/video', uploadsController.videoUpload);

module.exports = uploadsRouter;

