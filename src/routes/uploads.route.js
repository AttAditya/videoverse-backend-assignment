const express = require('express');
const uploadsController = require('../controllers/uploads.controller.js');

const uploadsRouter = express.Router();

uploadsRouter.post('/video', uploadsController.videoUpload);

module.exports = uploadsRouter;

