const express = require('express');
const editController = require('../controllers/edit.controller');
const authMiddleware = require('../middleware/auth.middleware');

const editRouter = express.Router();

editRouter.use(authMiddleware);

editRouter.post("/trim", editController.trim);
editRouter.post("/merge", editController.merge);

module.exports = editRouter;

