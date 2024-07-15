const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const authRouter = require('./auth.route');
const editRouter = require('./edit.route');
const uploadRouter = require('./uploads.route');
const downloadsRouter = require('./downloads.route');

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/edit/video', editRouter);
apiRouter.use('/uploads', uploadRouter);
apiRouter.use('/downloads', downloadsRouter);

apiRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = apiRouter;

