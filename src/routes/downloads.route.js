const express = require('express');
const downloadsController = require('../controllers/downloads.controller.js');

const downloadsRouter = express.Router();

downloadsRouter.get('/video/:fileId', downloadsController.videoDownload);

module.exports = downloadsRouter;
