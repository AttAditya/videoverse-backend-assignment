const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const apiRouter = require('./src/routes');

app.use(express.json());
app.use(fileUpload());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

