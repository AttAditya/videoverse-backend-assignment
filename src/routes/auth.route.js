const express = require('express');
const authController = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post("/get-api-token", authController.getApiToken);

module.exports = authRouter;

