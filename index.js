const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const apiRouter = require('./src/routes');

const PORT = process.env.PORT || 3000;
const MAX_UPLOAD_SIZE = process.env.MAX_UPLOAD_SIZE || (50 * 1024 * 1024);

app.use(express.json());
app.use(fileUpload({
    limits: {
        fileSize: MAX_UPLOAD_SIZE
    },
    abortOnLimit: true
}));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World, visit <a href="/api/docs">/api/docs</a> for API documentation');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

