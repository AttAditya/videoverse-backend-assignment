const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const editRouter = require('./edit.route');
const uploadRouter = require('./uploads.route');

const apiRouter = express.Router();

apiRouter.use('/edit/video', editRouter);
apiRouter.use('/uploads', uploadRouter);

apiRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = apiRouter;

