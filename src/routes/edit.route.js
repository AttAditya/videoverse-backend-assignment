const express = require('express');
const editController = require('../controllers/edit.controller');

const editRouter = express.Router();

editRouter.post("/trim", editController.trim);
editRouter.post("/merge", editController.merge);

module.exports = editRouter;

