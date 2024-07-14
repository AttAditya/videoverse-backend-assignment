const fs = require('fs');

module.exports.videoUpload = async (req, res) => {
    const { file } = req.files;
    const { data, mimetype } = file;

    let supportedTypes = ['video/mp4'];
    
    if (!supportedTypes.includes(mimetype)) {
        res.status(415);
        res.json({
            message: 'Invalid file format, check allowedFormats for supported types',
            allowedFormats: supportedTypes
        });
    }

    let name = Math.random().toString(36).substring(7);

    if (!fs.existsSync('.temp/videos')) {
        fs.mkdirSync('.temp/videos', { recursive: true });
    }

    fs.writeFileSync(`.temp/videos/${name}.mp4`, data);

    res.status(200);
    res.json({
        message: 'File uploaded successfully',
        fileId: name
    });
};